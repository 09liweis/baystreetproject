var express = require('express');
var router = express.Router();
const Prop = require('../models/prop');
const Stat = require('../models/stat');
const listingPicUrls = require('../helpers/prop');

router.route('/')
.get((req,res)=>{
  res.render('index', {title:'Bay Street Project' });
})
router.route('/stats').get((req,res)=>{
  Stat.find({},(err,stats)=>{
    res.render('stats',{title:'Stats',stats,user:req.session.user});
  });
});
router.route('/login').get((req,res)=>{
  const user = req.session.user;
  res.render('login',{title:'Login Page',user});
});
router.route('/prop/:id').get((req,res)=>{
  const id = req.params.id;
  Prop.findOne({sid:id},(err,prop)=>{
    prop.photos = listingPicUrls(prop,false);
    console.log(prop);
    res.render('detail',{prop,user:req.session.user});
  })
});
module.exports = router;