const Listing = require("../models/Listing");

exports.createListing = async (req, res) => {
  try {
    const { title, description, category, price, school, imageUrl } = req.body;

    const newListing = await Listing.create({
      userId: req.user.id,
      title,
      description,
      category,
      price,
      school,
      imageUrl
    });

    res.status(201).json({ success: true, listing: newListing });
  } catch (err) {
    console.error("Create listing error:", err);
    res.status(500).json({ success: false, message: "Failed to create listing" });
  }
};

exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find({ status: "active" }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, listings });
  } catch (err) {
    console.error("Fetch listings error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch listings" });
  }
};

exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ success: false, message: "Listing not found" });
    }
    res.status(200).json({ success: true, listing });
  } catch (err) {
    console.error("Get listing error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch listing" });
  }
};
