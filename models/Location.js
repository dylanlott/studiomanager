//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  locationSchema = new Schema({
  name: {type: String, unique: true, required: true},
  gear_list: [{type: mongoose.Schema.Types.ObjectId, ref: 'Gear'}],
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  clients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Client'}],
  date: { type: Date, default: Date.now },
  active: { type: Boolean, default:true }
});

module.exports = mongoose.model('Location', locationSchema); 