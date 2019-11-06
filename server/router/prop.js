var express = require('express');
var router = express.Router();
const Prop = require('../models/prop');

router.route('/')
.get((req,res)=>{
  Prop.find({}, 'sid addr', {limit:50}).sort('-ts').exec((err, props) => {
		res.status(200).json(props);
	});
})

module.exports = router;