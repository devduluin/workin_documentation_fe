const { DocumentSection } = require('../models');

// Get all sections
exports.getAllDocumentSections = async (req, res) => {
  try {
    const sections = await DocumentSection.findAll({ order: [['createdAt', 'ASC']] });
    return res.status(200).json({
      success: true,
      message: 'Document sections fetched successfully',
      data: sections
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

// Get section by section ID
exports.getDocumentSectionById = async (req, res) => {
  try {
    const section = await DocumentSection.findByPk(req.params.id);
    if (!section) return res.status(404).json({ success: false, message: 'Document section not found', data: null });

    return res.status(200).json({
      success: true,
      message: 'Document section fetched successfully',
      data: section
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message, data: null });
  }
};

// Get all sections by documentId
exports.getSectionsByDocumentId = async (req, res) => {
  try {
    const { documentId } = req.params;
    const sections = await DocumentSection.findAll({
      where: { documentId },
      order: [['createdAt', 'ASC']]
    });

    return res.status(200).json({
      success: true,
      message: 'Document sections fetched successfully',
      data: sections
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message, data: null });
  }
};

// Create section
exports.createDocumentSection = async (req, res) => {
  try {
    const { documentId, title, content } = req.body;
    if (!documentId || !title || !content) {
      return res.status(400).json({ success: false, message: 'documentId, title, and content are required', data: null });
    }

    const section = await DocumentSection.create({ documentId, title, content });
    return res.status(201).json({ success: true, message: 'Document section created successfully', data: section });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message, data: null });
  }
};

// Update section
exports.updateDocumentSection = async (req, res) => {
  try {
    const { title, content } = req.body;
    const section = await DocumentSection.findByPk(req.params.id);
    if (!section) return res.status(404).json({ success: false, message: 'Document section not found', data: null });

    if (title !== undefined) section.title = title;
    if (content !== undefined) section.content = content;
    await section.save();

    return res.status(200).json({ success: true, message: 'Document section updated successfully', data: section });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message, data: null });
  }
};

// Delete section
exports.deleteDocumentSection = async (req, res) => {
  try {
    const deleted = await DocumentSection.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ success: false, message: 'Document section not found', data: null });

    return res.status(200).json({ success: true, message: 'Document section deleted successfully', data: null });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message, data: null });
  }
};
