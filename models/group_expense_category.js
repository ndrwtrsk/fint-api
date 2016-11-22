/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupExpenseCategory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      field: 'name'
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
    tableName: 'group_expense_category'
  });
};
