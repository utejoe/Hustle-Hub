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
    const listings = await Listing.find({ status: { $in: ["approved", "active"] } }).sort({ createdAt: -1 });
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


// server/controllers/listingController.js
exports.getAllListings = async (req, res) => {
  try {
    const query = { status: "approved" };

    if (req.query.school) query.school = req.query.school;
    if (req.query.category) query.category = req.query.category;
    if (req.query.boosted === "true") query.isBoosted = true;

    const listings = await Listing.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, listings });
  } catch (err) {
    console.error("Fetch listings error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch listings" });
  }
};

// server/controllers/listingController.js
exports.boostListing = async (req, res) => {
  try {
    const boostData = { isBoosted: true };

    if (req.body.boostExpiry) {
      boostData.boostExpiry = req.body.boostExpiry;
    } else {
      // Default boost for 7 days
      boostData.boostExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    }

    await Listing.findByIdAndUpdate(req.params.id, boostData);
    res.json({ success: true, message: "Listing boosted successfully!" });
  } catch (err) {
    console.error("Boost error:", err);
    res.status(500).json({ success: false, message: "Boost failed" });
  }
};
