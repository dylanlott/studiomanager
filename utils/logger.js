const colors = require('colors/safe');

module.exports = function(req, res, next) {
  console.log(req.body);
  console.log(req.user);
  next();
}
