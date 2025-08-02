// server/controllers/adminController.js
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ success: false, message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "5d" });

    res.status(200).json({ success: true, token, admin: { id: admin._id, email: admin.email } });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// NEW: approve listing
exports.approveListing = async (req, res) => {
  try {
    await Listing.findByIdAndUpdate(req.params.id, { status: "approved" });
    res.json({ success: true, message: "Listing approved" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// NEW: reject listing
exports.rejectListing = async (req, res) => {
  try {
    await Listing.findByIdAndUpdate(req.params.id, { status: "rejected" });
    res.json({ success: true, message: "Listing rejected" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};