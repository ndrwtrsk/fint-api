/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personalIncomeCategory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    userUid: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'fint_user',
        key: 'uid'
      },
      field: 'user_uid'
    }
  }, {
    tableName: 'personal_income_category'
  });
};
