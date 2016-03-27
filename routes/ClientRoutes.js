module.exports = function(){
  var express = require('express');
  var app = express();
  var client = require('../controllers/ClientCtrl.js');

  //### PREFIXED '/client/'

  app.get('/', client.list);
  app.get('/:id', client.getOne);
  app.post('/', client.add);

  app.put('/:id', function(req, res){

  });
  app.delete('/:id', function(req, res){

  })

  return app;
}();