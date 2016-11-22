/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupIncomeComment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userUid: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'fint_user',
        key: 'uid'
      },
      field: 'user_uid'
    },
    incomeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'group_income',
        key: 'id'
      },
      field: 'income_id'
    },
    datetime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'datetime'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'content'
    }
  }, {
    tableName: 'group_income_comment'
  });
};
