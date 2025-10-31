const { Category, Document, DocumentSection } = require('../models');

// ✅ Get all categories + nested documents & sections
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Document,
          include: [
            {
              model: DocumentSection,
              attributes: ['id', 'title', 'content']
            }
          ]
        }
      ],
      order: [
        ['id', 'ASC'],
        [Document, 'id', 'ASC'],
        [Document, DocumentSection, 'id', 'ASC']
      ]
    });

    return res.status(200).json({
      success: true,
      message: 'Categories with documents and sections fetched successfully',
      data: categories
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching categories',
      error: error.message
    });
  }
};

// Get category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category', error: error.message });
  }
};

// Create category
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Category name is required',
        data: null
      });
    }

    const category = await Category.create({ name });
    return res.status(201).json({
      success: true,
      message: 'Category created successfully',
      data: category
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

// Update category
exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    category.name = name;
    await category.save();

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error: error.message });
  }
};

// Delete category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Category.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Category not found',
        data: null
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Category deleted successfully',
      data: null
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};
