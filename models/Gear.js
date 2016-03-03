//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment'); 

var  gearModel = new Schema({
  name: {type: String, required: true},
  date_added: {type: Date, default: Date.now},
  category: {type: String},
  location: {type: mongoose.Schema.Types.ObjectId, ref: 'Location'},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model('Gear', gearModel);