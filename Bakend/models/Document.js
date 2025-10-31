const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Document = sequelize.define('Document', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  categoryId: { type: DataTypes.INTEGER, allowNull: false, field: 'category_id' }, // sesuai DB
}, {
  tableName: 'documents',
  timestamps: true,
  createdAt: 'createdAt', // 👈 samakan dengan nama kolom di DB
  updatedAt: 'updatedAt',
  freezeTableName: true,
  underscored: false, // 👈 pastikan false, biar gak jadi created_at
});

module.exports = Document;
