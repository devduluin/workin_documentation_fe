const { Document, Category } = require('../models');

// Get all documents (with optional category filter)
exports.getAllDocuments = async (req, res) => {
  try {
    const { categoryId } = req.query; // ambil query param
    const whereClause = categoryId ? { categoryId } : {}; // filter kalau ada

    const documents = await Document.findAll({
      where: whereClause,
      include: [{ model: Category, attributes: ['id', 'name'] }]
    });

    res.status(200).json({
      success: true,
      message: 'Documents fetched successfully',
      data: documents
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching documents',
      data: null,
      error: error.message
    });
  }
};

// Get document by ID
exports.getDocumentById = async (req, res) => {
  try {
    const document = await Document.findByPk(req.params.id, {
      include: [{ model: Category, attributes: ['id', 'name'] }]
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: 'Document not found',
        data: null
      });
    }

    res.status(200).json({
      success: true,
      message: 'Document fetched successfully',
      data: document
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching document',
      data: null,
      error: error.message
    });
  }
};

// Get documents by Category ID
exports.getDocumentsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const documents = await Document.findAll({
      where: { categoryId },
      include: [{ model: Category, attributes: ["id", "name"] }],
    });

    if (!documents || documents.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No documents found for this category",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Documents fetched successfully",
      data: documents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching documents by category",
      data: null,
      error: error.message,
    });
  }
};

// Create new document
exports.createDocument = async (req, res) => {
  try {
    const { categoryId, title, imageUrl, content } = req.body;

    if (!title || !categoryId) {
      return res.status(400).json({
        success: false,
        message: 'Title and Category ID are required',
        data: null
      });
    }

    const document = await Document.create({
      categoryId,
      title,
      content
    });

    return res.status(201).json({
      success: true,
      message: 'Document created successfully',
      data: document
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error creating document',
      data: null,
      error: error.message
    });
  }
};

// Update document
exports.updateDocument = async (req, res) => {
  try {
    const { title, categoryId, imageUrl, content } = req.body;

    const document = await Document.findByPk(req.params.id);
    if (!document) {
      return res.status(404).json({
        success: false,
        message: 'Document not found',
        data: null
      });
    }

    document.title = title || document.title;
    document.categoryId = categoryId || document.categoryId;
    document.imageUrl = imageUrl || document.imageUrl;
    document.content = content || document.content;

    await document.save();

    res.status(200).json({
      success: true,
      message: 'Document updated successfully',
      data: document
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating document',
      data: null,
      error: error.message
    });
  }
};

// Delete document
exports.deleteDocument = async (req, res) => {
  try {
    const document = await Document.findByPk(req.params.id);
    if (!document) {
      return res.status(404).json({
        success: false,
        message: 'Document not found',
        data: null
      });
    }

    await document.destroy();

    res.status(200).json({
      success: true,
      message: 'Document deleted successfully',
      data: null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting document',
      data: null,
      error: error.message
    });
  }
};
