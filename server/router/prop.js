var express = require('express');
var router = express.Router();
const Prop = require('../models/prop');
const Prov = require('../models/prov');
const listingPicUrls = require('../helpers/prop');

const fields = 'sid his addr ptype2 photonumbers pho phosrc ddfID picUrl phomt saletp city prov lp sp lat lng status bdrms bthrms gr zip';
router.route('/')
.post((req,res)=>{
  const filters = req.body;
  let query = {};
  if (filters.search) {
    query.addr = new RegExp(filters.search,'i');
  }
  Prop.find(query,'', {limit:20}).sort('-ts').exec((err, props) => {
    for(let i in props) {
      let p = props[i];
      props[i].photos = listingPicUrls(p,false);
    }
    res.status(200).json(props);
	});
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