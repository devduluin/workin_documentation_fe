const sequelize = require('../config/db');
const Admin = require('./Admin');
const Category = require('./Category');
const Document = require('./Document');
const DocumentSection = require('./DocumentSection');

// Relasi Category - Document
Category.hasMany(Document, { foreignKey: 'categoryId', onDelete: 'CASCADE' });
Document.belongsTo(Category, { foreignKey: 'categoryId' });

// Relasi Document - DocumentSection
Document.hasMany(DocumentSection, {
  foreignKey: 'documentId',
  as: 'sections',
  onDelete: 'CASCADE',
});
DocumentSection.belongsTo(Document, {
  foreignKey: 'documentId',
  as: 'document',
});

module.exports = {
  sequelize,
  Admin,
  Category,
  Document,
  DocumentSection,
};
