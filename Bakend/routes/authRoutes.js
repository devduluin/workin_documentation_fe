const express = require("express");
const router = express.Router();
const { login, logout, register } = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");

// 🔹 Login & Register
router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);

// 🔐 Cek token dari cookie
router.get("/check", verifyToken, (req, res) => {
  // verifyToken akan set req.user kalau valid
  return res.json({
    success: true,
    message: "Token valid",
    user: req.user, // bisa kirim role juga kalau ada
  });
});

// 🧹 Logout (hapus cookie)
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax", // sesuaikan dengan setting login kamu
    secure: process.env.NODE_ENV === "production",
  });
  return res.json({ success: true, message: "Logout berhasil" });
});

module.exports = router;
