const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed
  role: { type: String, enum: ["admin"], default: "admin" }
});

module.exports = mongoose.model("Admin", adminSchema);
