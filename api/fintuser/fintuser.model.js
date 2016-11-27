/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fintUser', {
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: 'uid'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    photourl: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'photourl'
    }
  }, {
    tableName: 'fint_user'
  });
};
