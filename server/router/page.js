var express = require('express');
var router = express.Router();
const Prop = require('../models/prop');

router.route('/')
.get((req,res)=>{
  res.render('index', {title:'Bay Street Project' });
})
router.route('/prop/:id').get((req,res)=>{
  const id = req.param('id');
  res.send(id);
});
module.exports = router;