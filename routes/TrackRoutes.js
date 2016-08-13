'use strict';

const track = require('../controllers/TrackCtrl');
const express = require('express');
const app = express();

module.exports = function(){
  /// Prefix '/track'
  app.get('/:project_id/', track.list);
  app.get('/:project_id/:id', track.listOne);
  app.post('/:project_id/', track.createTrack);
  app.put('/:project_id/:id', track.updateTrack);
  app.delete('/:id', track.deleteTrack);

  return app;
}();
