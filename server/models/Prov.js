var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProvSchema = new Schema({
  prov:{type:String},
  cities:{
    type:Array
  }
});

module.exports = mongoose.model('Prov', ProvSchema);