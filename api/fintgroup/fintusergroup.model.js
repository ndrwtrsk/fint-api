/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fintUsersGroups', {
    userUid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'null',
        key: 'null'
      },
      field: 'user_uid'
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'fint_group',
        key: 'id'
      },
      field: 'group_id'
    }
  }, {
    tableName: 'fint_users_groups'
  });
};
