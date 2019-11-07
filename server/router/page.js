var express = require('express');
var router = express.Router();
const Prop = require('../models/prop');

router.route('/')
.get((req,res)=>{
  res.render('index', {title:'Bay Street Project' });
})

module.exports = router;