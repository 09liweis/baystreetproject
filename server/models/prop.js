var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropSchema = new Schema({
  addr: String,
  bdrms: Number,
  bsmt: String,
  bthrms: Number,
  city: String,
  cmty: String,
  daddr: String,
  gr: Number,
  id: String,
  lat: Number,
  ld: String,
  lng:Number,
  lp: Number,
  lpunt:String,
  lst:String,
  lstd:Number,
  ltp:String,
  pho:Number,
  phomt:String,
  phosrc:String,
  prov:String,
  pstyl:String,
  ptp:String,
  ptype:String,
  ptype2:Array,
  saletp:[String],
  sid:String,
  src:String,
  rltr:String,
  laundry_lev:String,
  internet:String,
  heat:String,
  status:String,
  sewer:String,
  age:Number,
  pool:Number,
  feat:Array,
  stp:String,
  water:String,
  geoq:Number,
  sqft1:Number,
  tax:Number,
  taxyr:Number,
  tbdrms:Number,
  kch:Number,
  tgr:Number,
  zip:String,
  photos:Array,
  rms:Array,
  m:String,
  ac:String,
  bths:Array,
  crsst:String,
  dom:Number,
  la:Object,
  photonumbers:Number
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