var express = require('express');
var router = express.Router();
const Prop = require('../models/prop');
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
  res.status(200).json('done');
});

module.exports = router;