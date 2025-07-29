// Approve listing
router.put("/approve/:id", async (req, res) => {
  try {
    const updated = await Listing.findByIdAndUpdate(req.params.id, { status: "approved" });
    res.json({ success: true, message: "Listing approved" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error approving listing" });
  }
});

// Reject listing
router.put("/reject/:id", async (req, res) => {
  try {
    const updated = await Listing.findByIdAndUpdate(req.params.id, { status: "rejected" });
    res.json({ success: true, message: "Listing rejected" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error rejecting listing" });
  }
});

// Get pending listings
router.get("/pending-listings", async (req, res) => {
  try {
    const listings = await Listing.find({ status: "pending" });
    res.json({ success: true, listings });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching pending listings" });
  }
});
