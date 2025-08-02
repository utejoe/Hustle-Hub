// middleware/adminMiddleware.js
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const adminMiddleware = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);
    if (!admin || admin.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    req.admin = admin;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = adminMiddleware;
