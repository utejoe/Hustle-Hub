const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  school: { type: String, required: true },

  isBoosted: { type: Boolean, default: false },
  boostExpiry: { type: Date },

  isVerified: { type: Boolean, default: false },

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Listing", listingSchema);
