// var Sequelize = require('sequelize');
//
// var sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres',
//
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
//   define: {
//     timestamps: false
//   }
// });
//
// var FintUser = sequelize.import('models/fint_user');
// var FintGroup = sequelize.import('models/fint_group');
// var FintUsersGroups = sequelize.import('models/fint_users_groups');
//
// FintGroup.belongsToMany(FintUser, {
//   through:{
//     model: FintUsersGroups,
//     unique: false
//   },
//   foreignKey: 'group_id'
// });
//
// FintUser.belongsToMany(FintGroup, {
//   through:{
//     model: FintUsersGroups,
//     unique: false
//   },
//   foreignKey: 'user_uid'
// });
//
// FintUser.findAll().then(users => {
//   users[0].getFintGroups().then(function(groups){
//     console.log(groups);
//   });
// });

var express = require('express');
var app = express();
var routes = require('./api/routes');

app.get('/', function (req, res) {
  res.send('Hello World!')
});

routes(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});