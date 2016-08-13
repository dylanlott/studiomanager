//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var  trackModel = new Schema({
  name: {
  	type: String,
  	required: true
  },
  // to_do: [{
  //   name: {
  //     type: String
  //   }
  // }],
  // finished: [{
  //   name: {
  //     type: String
  //   }
  // }],
  created: {
    type: Date
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
});

module.exports = mongoose.model('Track', trackModel);
