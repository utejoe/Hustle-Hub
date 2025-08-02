// server/controllers/orderController.js
const Order = require("../models/Order");

// Place a new order (escrow initiated)
exports.placeOrder = async (req, res) => {
  try {
    const { buyerId, sellerId, listingId, price } = req.body;
    const newOrder = new Order({ buyerId, sellerId, listingId, price });

    await newOrder.save();
    res.status(201).json({ success: true, order: newOrder });
  } catch (err) {
    console.error("Place order error:", err);
    res.status(500).json({ success: false, message: "Failed to place order" });
  }
};

// Confirm delivery (release escrow)
exports.confirmDelivery = async (req, res) => {
  try {
    await Order.findByIdAndUpdate(req.params.orderId, {
      deliveryStatus: "delivered",
      paymentStatus: "released"
    });

    res.status(200).json({ success: true, message: "Delivery confirmed and payment released" });
  } catch (err) {
    console.error("Confirm delivery error:", err);
    res.status(500).json({ success: false, message: "Failed to confirm delivery" });
  }
};
