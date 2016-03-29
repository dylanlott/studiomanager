module.exports = function(){
  var express = require('express');
  var app = express();
  var project = require('../controllers/ProjectCtrl.js'); 

  // Prefixed by '/project'
  
  app.get('/', project.list);
  app.get('/:id', function(req, res){
  	
  });
  app.post('/', project.add);
  app.put('/:id', function(req, res){
  	
  });
  app.delete('/:id', function(req, res){
  	
  });

  return app;
}();