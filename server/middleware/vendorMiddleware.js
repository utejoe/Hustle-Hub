// server/middleware/vendorMiddleware.js
const User = require("../models/User");

const vendorMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user || !user.isVendor) {
      return res.status(403).json({ message: "Only vendors can perform this action" });
    }
    next();
  } catch (err) {
    console.error("Vendor check error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = vendorMiddleware;
