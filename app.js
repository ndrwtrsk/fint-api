var Sequelize = require('sequelize');

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

var FintUser = sequelize.import('models/fint_user');
var FintGroup = sequelize.import('models/fint_group');
var FintUsersGroups = sequelize.import('models/fint_users_groups');

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

FintUser.findAll().then(function(users){
  users[0].getFintGroups().then(function(groups){
    console.log(groups);
  });
});

