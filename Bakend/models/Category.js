const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'categories',
  timestamps: true,
  createdAt: 'createdAt', // pakai camelCase
  updatedAt: 'updatedAt', // pakai camelCase
  freezeTableName: true,
  underscored: false // pastikan tidak pakai snake_case
});

module.exports = Category;
