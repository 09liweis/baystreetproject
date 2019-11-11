var express = require('express');
var router = express.Router();
const Prop = require('../models/prop');
const listingPicUrls = require('../helpers/prop');

router.route('/')
.get((req,res)=>{
  res.render('index', {title:'Bay Street Project' });
})
router.route('/prop/:id').get((req,res)=>{
  const id = req.param('id');
  Prop.findOne({sid:id},(err,prop)=>{
    prop.photos = listingPicUrls(prop,false);
    res.render('detail',{prop});
  })
});
module.exports = router;