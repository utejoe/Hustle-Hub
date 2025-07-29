const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  buyerId: String,
  sellerId: String,
  listingId: String,
  price: Number,
  paymentStatus: { type: String, default: "pending" },
  deliveryStatus: { type: String, default: "not_delivered" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
