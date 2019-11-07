var express = require('express');
var router = express.Router();
const Prop = require('../models/prop');
const listingPicUrls = require('../helpers/prop');

const fields = 'sid his addr ptype2 photonumbers pho phosrc ddfID picUrl phomt saletp city prov lp sp lat lng status bdrms bthrms gr zip';
router.route('/')
.get((req,res)=>{
  Prop.find({},'', {limit:20}).sort('-ts').exec((err, props) => {
    for(let i in props) {
      props[i].photos = listingPicUrls(props[i],false);
    }
    res.status(200).json(props);
	});
})

module.exports = router;