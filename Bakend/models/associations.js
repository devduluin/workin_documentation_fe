const { Category, Document, DocumentSection } = require('./index'); // Asumsi index export semua model

// Category & Document
Category.hasMany(Document, { foreignKey: 'categoryId', onDelete: 'CASCADE' });
Document.belongsTo(Category, { foreignKey: 'categoryId' });

// Document & DocumentSection
Document.hasMany(DocumentSection, { foreignKey: 'documentId', onDelete: 'CASCADE' });
DocumentSection.belongsTo(Document, { foreignKey: 'documentId' });

module.exports = {
  Category,
  Document,
  DocumentSection
};
