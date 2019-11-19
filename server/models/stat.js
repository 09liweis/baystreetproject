var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatSchema = new Schema({
  _id:String,
  city:String,
  Avg_Price:Number,
  High_Price:Number,
  Low_Price:Number,
  Prov:String,
  P_type:String,
  Comp_Last_year:String,
  Comp_Last_month:String,
  hists:Array,
  trd_vol:Array
});

module.exports = mongoose.model('Stat', StatSchema);