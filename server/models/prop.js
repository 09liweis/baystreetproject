var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropSchema = new Schema({
  
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