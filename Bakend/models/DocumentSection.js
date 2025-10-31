const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Document = require('./Document'); // tambahkan ini

const DocumentSection = sequelize.define('DocumentSection', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  documentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'documents', // pastikan sesuai nama tabel
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'document_sections',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  freezeTableName: true
});

// 🔥 Tambahkan relasi ke Document
DocumentSection.belongsTo(Document, {
  foreignKey: 'documentId',
  as: 'document'
});

module.exports = DocumentSection;
