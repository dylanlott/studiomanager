//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  Project = new Schema({
  name: {type: String, unique: true, required: true},
  date_created: { type: Date, default: Date.now },
  date_started: {type: Date},
  due_date: {type: Date},
  project_lead: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  engineers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  track_listing: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track'}]
});

module.exports = mongoose.model('Project', Project); 