var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropSchema = new Schema({
  addr: {
    type:String
  },
  bdrms: {
    type:Number
  },
  bsmt: {
    type:String
  },
  bthrms: {
    type:Number
  },
  city: {
    type:String
  },
  cmty: {
    type:String
  },
  daddr: {
    type:String
  },
  gr: {
    type:Number
  },
  id: {
    type:String
  },
  lat: {
    type:Number
  },
  ld: {
    type:String
  },
  lng: {type:Number},
  lp: {
    type:Number
  },
  lpunt: {
    type:String
  },
  lst: {
    type:String
  },
  lstd: {
    type:Number
  },
  ltp: {
    type:String
  },
  pho: {
    type:Number
  },
  phomt: {
    type:String
  },
  phosrc: {
    type:String
  },
  prov: {
    type:String
  },
  pstyl: {
    type:String
  },
  ptp: {
    type:String
  },
  ptype: {
    type:String
  },
  ptype2: {
    type:Array
  },
  saletp: {
    type:Array
  },
  sid: {
    type:String
  },
  src: {
    type:String
  },
  status: {
    type:String
  },
  stp: {
    type:String
  },
  tax:{
    type:Number
  },
  taxyr:{
    type:Number
  },
  tbdrms:{
    type:Number
  },
  tgr:{
    type:Number
  },
  zip: {
    type:String
  },
  photos:{
    type:Array
  }
});

PropSchema.pre('save', (next) => {
  const currentDate = new Date();
  this.update_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

module.exports = mongoose.model('Prop', PropSchema);