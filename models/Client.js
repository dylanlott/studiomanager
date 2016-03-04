//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment'); 

var  clientModel = new Schema({
  contact_name: {type: String, required: true},
  contact_email: {type: String},
  joined: {type: Date, default: Date.now},
  status: {
  	type: String, enum: ["payment_pending", "paid", "cancelled", "done"], 
  	default: "pending"
  },
  location: {type: String},
  active: {type: Boolean, default: true}
});

module.exports = mongoose.model('Client', clientModel);