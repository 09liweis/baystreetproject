var express = require('express');
var router = express.Router();
const Prop = require('../models/prop');
const Stat = require('../models/stat');
const listingPicUrls = require('../helpers/prop');

router.route('/')
.get((req,res)=>{
  const user = req.session.user;
  res.render('index', {title:'Bay Street Project',user});
})
router.route('/stats').get((req,res)=>{
  Stat.find({},(err,stats)=>{
    const user = req.session.user;
    res.render('stats',{title:'Stats',stats,user});
  });
});
router.route('/login').get((req,res)=>{
  const user = req.session.user;
  res.render('login',{title:'Login Page',user});
});
router.route('/logout').get((req,res)=>{
  req.session.destroy((err)=>{
    res.redirect('/');
  })
});
router.route('/dashboard').get((req,res)=>{
  const user = req.session.user;
  if (!user) {
    res.redirect('/login');
  } else {
    if (user.favs.length > 0) {
      Prop.find({id:{$in:user.favs}}).exec((err,props)=>{
        for(let i in props) {
          let p = props[i];
          props[i].photos = listingPicUrls(p,false);
        }
        res.render('login',{title:'Dashboard',user,props});
      });
    } else {
      res.render('login',{title:'Dashboard',user});
    }
  }
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