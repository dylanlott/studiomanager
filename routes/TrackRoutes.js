'use strict';

const track = require('../controllers/TrackCtrl');
const express = require('express');
const app = express();

module.exports = function(){
  /// Prefix '/track'
  app.get('/', function(req, res){

  });
  app.get('/:id', function(req, res){

  });
  app.post('/', track.createTrack);
  app.put('/:id', function(req, res){

  });
  app.delete('/:id', function(req, res){

  });

  return app;
}();
