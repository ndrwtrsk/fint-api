/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personalIncome', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'value'
    },
    datetime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'datetime'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      field: 'description'
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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'personal_income_category',
        key: 'id'
      },
      field: 'category_id'
    }
  }, {
    tableName: 'personal_income'
  });
};
