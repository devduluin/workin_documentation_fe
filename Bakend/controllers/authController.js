const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

// ======================
// 📌 Register Admin (dengan validasi email & username)
// ======================
exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Semua field wajib diisi",
      });
    }

    // Cek email dan username sudah terdaftar
    const existingEmail = await Admin.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email sudah terdaftar",
      });
    }

    const existingUsername = await Admin.findOne({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({
        success: false,
        message: "Username sudah digunakan",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru
    const newAdmin = await Admin.create({
      username,
      email,
      password: hashedPassword,
      role: role || "admin",
    });

    // Generate token
    const token = jwt.sign(
      { id: newAdmin.id, username: newAdmin.username, role: newAdmin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const isProduction = process.env.NODE_ENV === "production";

    // Set cookie token
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "Registrasi admin berhasil dan sudah login",
      data: {
        id: newAdmin.id,
        username: newAdmin.username,
        email: newAdmin.email,
        role: newAdmin.role,
      },
    });
  } catch (error) {
    console.error("❌ Error register:", error);
    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server",
    });
  }
};

// ======================
// 📌 Login Admin
// ======================
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Admin.findOne({ where: { username } });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Username tidak terdaftar" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Password salah" });
    }

    // ✅ Buat JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ Deteksi environment
    const isProduction = process.env.NODE_ENV === "production";

    // ✅ Simpan token ke cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax", // cocok untuk localhost HTTP
      path: "/",        // cukup ini
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: "Login berhasil",
    });
  } catch (err) {
    console.error("❌ Error login:", err);
    return res
      .status(500)
      .json({ success: false, message: "Terjadi kesalahan server" });
  }
};

// ======================
// 📌 Logout Admin
// ======================
exports.logout = (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";

  res.clearCookie("token", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
  });

  return res.json({ success: true, message: "Logout berhasil" });
};
