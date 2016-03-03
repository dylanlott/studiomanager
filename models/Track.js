//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment'); 

var  trackModel = new Schema({
  name: {
  	type: String,
  	required: true
  },
  to_do: [{
    name: {type: String, unique: true}
  }],
  finished: [{
    name: {type: String, unique: true}
  }]
});

module.exports = mongoose.model('Track', trackModel);