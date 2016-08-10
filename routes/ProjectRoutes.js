module.exports = function(){
  const express = require('express');
  const app = express();
  const project = require('../controllers/ProjectCtrl.js');
  const user = require('../controllers/UserCtrl.js');

  // Prefixed by '/project'
  app.all('*', user.requireAuth);
  app.get('/', project.list);
  app.get('/:id', project.listOne);
  app.post('/', project.add);
  app.put('/:id', project.update);
  app.delete('/:id', project.delete);

  return app;
}();
