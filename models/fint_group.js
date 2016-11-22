/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fintGroup', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    ownerUid: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'fint_user',
        key: 'uid'
      },
      field: 'owner_uid'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    }
  }, {
    tableName: 'fint_group'
  });
};
