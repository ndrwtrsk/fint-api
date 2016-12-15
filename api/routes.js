module.exports = function(app) {
  var fintuserRoute = require('./fintuser/fintuser.router');
  var incomeRoute = require('./income/income.router');
  app.use('/api', fintuserRoute);
  app.use('/api', incomeRoute);
};