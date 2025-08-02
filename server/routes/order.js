const express = require("express");
const router = express.Router();
const { placeOrder, confirmDelivery } = require("../controllers/orderController");

// Place an order (escrow)
router.post("/", placeOrder);

// Confirm delivery
router.put("/:orderId/deliver", confirmDelivery);

module.exports = router;
