const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Category, Document, DocumentSection } = require("../models");

router.get("/", async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.trim() === "") {
      return res.json({ success: true, data: [] });
    }

    const keyword = q.trim();

    // 🔍 Cari di Document
    const documents = await Document.findAll({
      where: { title: { [Op.like]: `%${keyword}%` } },
      include: [{ model: Category, attributes: ["id", "name"] }],
      limit: 10,
    });

    // 🔍 Cari di Section (dengan alias)
    const sections = await DocumentSection.findAll({
      where: { title: { [Op.like]: `%${keyword}%` } },
      include: [
        {
          model: Document,
          as: "document", // ✅ wajib, sesuai alias di model
          include: [{ model: Category, attributes: ["id", "name"] }],
        },
      ],
      limit: 10,
    });

    const results = [
      ...documents.map((doc) => ({
        type: "document",
        title: doc.title,
        categoryId: doc.Category?.id || null,
        categoryName: doc.Category?.name || null,
        documentId: doc.id,
        sectionId: null,
      })),
      ...sections.map((sec) => ({
        type: "section",
        title: sec.title,
        categoryId: sec.document?.Category?.id || null,
        categoryName: sec.document?.Category?.name || null,
        documentId: sec.document?.id || null,
        sectionId: sec.id,
      })),
    ];

    res.json({ success: true, data: results });
  } catch (err) {
    console.error("❌ Search error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
