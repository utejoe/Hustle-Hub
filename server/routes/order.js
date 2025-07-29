// Place an order
router.post("/", async (req, res) => {
  const { buyerId, sellerId, listingId, price } = req.body;
  const newOrder = new Order({ buyerId, sellerId, listingId, price });
  await newOrder.save();
  res.json({ success: true, order: newOrder });
});

// Confirm delivery
router.put("/:orderId/deliver", async (req, res) => {
  await Order.findByIdAndUpdate(req.params.orderId, {
    deliveryStatus: "delivered",
    paymentStatus: "released"
  });
  res.json({ success: true, message: "Delivery confirmed and payment released" });
});
