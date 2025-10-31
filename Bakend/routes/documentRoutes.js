const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// Public (user biasa bisa lihat dokumen)
router.get('/category/:categoryId', documentController.getDocumentsByCategory);
router.get('/:id', documentController.getDocumentById);
router.get('/', documentController.getAllDocuments);

// Admin-only (hanya admin bisa CRUD)
router.post('/', verifyToken, isAdmin, documentController.createDocument);
router.put('/:id', verifyToken, isAdmin, documentController.updateDocument);
router.delete('/:id', verifyToken, isAdmin, documentController.deleteDocument);

module.exports = router;