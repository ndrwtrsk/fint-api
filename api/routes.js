module.exports = function(app) {
  var fintuserRoute = require('./fintuser/fintuser.router');
  app.use('/api', fintuserRoute);
};