var Sequelize = require("sequelize");
var sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});

var FintUser = sequelize.import('./fintuser/fintuser.model');


var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.FintUser = FintUser;

module.exports = db;