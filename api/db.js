const Sequelize = require("sequelize");

//  DB connection
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
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

//region Models

let FintUser = sequelize.import('./fintuser/fintuser.model');
let FintGroup = sequelize.import('./fintgroup/fintgroup.model');
let FintUsersGroups = sequelize.import('./fintgroup/fintusergroup.model');

//endregion Models

//region Associations

FintGroup.belongsToMany(FintUser, {
  through:{
    model: FintUsersGroups,
    unique: false
  },
  foreignKey: 'group_id'
});

FintUser.belongsToMany(FintGroup, {
  through:{
    model: FintUsersGroups,
    unique: false
  },
  foreignKey: 'user_uid'
});

//endregion Associations


let db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.FintUser = FintUser;

module.exports = db;