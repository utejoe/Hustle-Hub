// server/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  school: { type: String, required: true },
  isVendor: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  premium: { type: Boolean, default: false },
  avatarUrl: { type: String, default: "" },
  listingsCount: { type: Number, default: 0 }, // ✅ track how many listings the user has
  createdAt: { type: Date, default: Date.now },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
});

module.exports = mongoose.model("User", userSchema);
