const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Admin = sequelize.define('Admin', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'admin'
  }
}, {
  tableName: 'admins',
  timestamps: false   // 🚀 ubah jadi false
});

module.exports = Admin;
