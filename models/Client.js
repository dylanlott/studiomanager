//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment'); 

var  clientModel = new Schema({
  contact_name: {type: String},
  contact_email: {type: String},
  joined: {type: Date, default: Date.now},
  status: {
  	type: String, enum: ["payment_pending", "paid", "cancelled", "done", "open"], 
  	default: "open"
  },
  location: {type: String},
  active: {type: Boolean, default: true},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Client', clientModel);