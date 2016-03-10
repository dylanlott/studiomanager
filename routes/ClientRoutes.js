module.exports = function(){
  var express = require('express');
  var app = express();
  var client = require('../controllers/ClientCtrl.js');

  //### '/client/'

  app.get('/', function(req, res){

  });
  app.get('/:id', function(req, res){

  });
  app.post('/', client.add);

  app.put('/:id', function(req, res){

  });
  app.delete('/:id', function(req, res){

  })

  return app;
}();