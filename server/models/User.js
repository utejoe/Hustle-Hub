const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  school: { type: String, required: true },
  isVendor: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  premium: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
