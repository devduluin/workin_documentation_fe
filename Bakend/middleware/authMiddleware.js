// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

/**
 * Middleware untuk verifikasi token JWT.
 * Bisa ambil token dari:
 *  - Header: "Authorization: Bearer <token>"
 *  - Cookie: req.cookies.token (fallback)
 */
const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token =
      (authHeader && authHeader.split(" ")[1]) || req.cookies?.token;

    if (!token || token === "undefined") {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // simpan payload user

    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

/**
 * Middleware untuk memastikan user adalah admin.
 */
const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(403).json({
      success: false,
      message: "Access denied. User data not found.",
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admins only.",
    });
  }

  next();
};

module.exports = { verifyToken, isAdmin };
