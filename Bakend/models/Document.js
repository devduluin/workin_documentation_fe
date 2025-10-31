const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const DocumentSection = require('./DocumentSection'); // tambahkan ini

const Document = sequelize.define('Document', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'documents',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  freezeTableName: true
});

// 🔥 Tambahkan relasi ke DocumentSection
Document.hasMany(DocumentSection, {
  foreignKey: 'documentId',
  as: 'sections',
  onDelete: 'CASCADE',
});

module.exports = Document;
