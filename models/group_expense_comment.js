/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupExpenseComment', {
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
    expenseId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'group_expense',
        key: 'id'
      },
      field: 'expense_id'
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
    tableName: 'group_expense_comment'
  });
};
