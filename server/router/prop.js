var express = require('express');
var router = express.Router();
const Prop = require('../models/prop');
const Stat = require('../models/stat');
const {User} = require('../models/user');
const listingPicUrls = require('../helpers/prop');

router.route('/')
.post((req,res)=>{
  const filters = req.body;
  let query = {};
  if (filters.search) {
    query.addr = new RegExp(filters.search,'i');
  } else if (filters.bbox) {
    const swLng = filters.bbox[0]
    const swLat = filters.bbox[1]
    const neLng = filters.bbox[2]
    const neLat = filters.bbox[3]
    query.lat = {$lt:neLat,$gt:swLat};
    query.lng = {$lt:neLng,$gt:swLng};
  }
  if (filters.city) {
    query.city = filters.city;
    delete query.lat
    delete query.lng
  }
  if (filters.ptype2) {
    query.ptype2 = {$in:[filters.ptype2]};
  }
  if (filters.bdrms) {
    query.bdrms = filters.bdrms;
  }
  if (filters.bthrms) {
    query.bthrms = filters.bthrms;
  }
  if (filters.gr) {
    query.gr = filters.gr;
  }
  Prop.find(query,'', {limit:50}).sort('-ts').exec((err, props) => {
    for(let i in props) {
      let p = props[i];
      props[i].photos = listingPicUrls(p,false);
    }
    res.status(200).json(props);
	});
});
router.route('/cities').get((req,res)=>{
  Stat.distinct('city',(err,cities)=>{
    res.status(200).json(cities);
  })
});
router.route('/fav').post((req,res)=>{
  const favs = req.body.favs;
  const user = req.session.user;
  user.favs = favs;
  User.findOneAndUpdate({_id:user._id},user,{'upsert': true },(err,ret)=>{
    res.status(200).json({ok:1});
  })
});
router.route('/importCity').get((req,res)=>{
  Prop.find({},'prov city').exec((err,props)=>{
    let provs = {};
    for(let i in props) {
      let prp = props[i];
      const c = prp.city;
      const p = prp.prov;
      if (provs[p]) {
        if (provs[p].indexOf(c) == -1) {
          provs[p].push(c);
        }
      } else {
        provs[p] = [c]
      }
    }
    insertProv(provs);
  })
});

function insertProv(provs) {
  const provsAry = Object.keys(provs);
  let prov = provsAry.pop();
  if (prov) {
    insertVal = {
      prov,
      cities:provs[prov]
    };
  }
}

module.exports = router;