const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DocumentSection = sequelize.define('DocumentSection', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  documentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'documentId', // 👈 wajib biar gak dicari 'document_id'
  },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
}, {
  tableName: 'document_sections',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  freezeTableName: true,
  underscored: false,
});

module.exports = DocumentSection;
