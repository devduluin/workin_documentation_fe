const express = require('express');
const router = express.Router();
const documentSectionController = require('../controllers/documentSectionController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// Public routes
router.get('/', documentSectionController.getAllDocumentSections);
router.get('/document/:documentId', documentSectionController.getSectionsByDocumentId);
router.get('/:id', documentSectionController.getDocumentSectionById);

// Admin routes
router.post('/', verifyToken, isAdmin, documentSectionController.createDocumentSection);
router.put('/:id', verifyToken, isAdmin, documentSectionController.updateDocumentSection);
router.delete('/:id', verifyToken, isAdmin, documentSectionController.deleteDocumentSection);

module.exports = router;
