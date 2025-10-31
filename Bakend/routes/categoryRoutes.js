const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// 🔹 Public: semua orang bisa lihat kategori
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);

// 🔐 Admin Only: create / update / delete
router.post('/', verifyToken, isAdmin, categoryController.createCategory);
router.put('/:id', verifyToken, isAdmin, categoryController.updateCategory);
router.delete('/:id', verifyToken, isAdmin, categoryController.deleteCategory);

module.exports = router;
