const enviroment = process.env.NODE_ENV || 'development';

var dbConnection = {};
if (enviroment === 'production'){
  // ?
} else if (enviroment === 'development'){
  dbConnection = {
    dbName: 'postgres',
    user: 'postgres',
    pw: 'postgres',
    hostname: 'localhost'
  };
}

const Sequelize = require('sequelize');

//  DB connection
const sequelize = new Sequelize(dbConnection.dbName, dbConnection.user, dbConnection.pw, {
  host: dbConnection.hostname,
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
let PersonalIncome = sequelize.import('./income/personal_income.model');
let PersonalIncomeCategory = sequelize.import('./income/personal_income_category.model');

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

PersonalIncome.belongsTo(FintUser, {foreignKey: 'user_uid'});
FintUser.hasMany(PersonalIncome, {foreignKey: 'user_uid'});

PersonalIncome.belongsTo(PersonalIncomeCategory, {foreignKey: 'category_id'});
PersonalIncomeCategory.hasMany(PersonalIncome, {foreignKey: 'category_id'});

PersonalIncomeCategory.belongsTo(FintUser, {foreignKey: 'user_uid'});
FintUser.hasMany(PersonalIncomeCategory, {foreignKey: 'user_uid'});

//endregion Associations


let db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.FintUser = FintUser;
db.PersonalIncome = PersonalIncome;
db.PersonalIncomeCategory = PersonalIncomeCategory;

module.exports = db;