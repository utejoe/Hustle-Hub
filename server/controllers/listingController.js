// server/controllers/listingController.js
const Listing = require("../models/Listing");
const User = require("../models/User");

// Create listing
exports.createListing = async (req, res) => {
  try {
    const { title, description, category, price, school, imageUrl } = req.body;

    // Create listing
    const newListing = await Listing.create({
      userId: req.user.id,
      title,
      description,
      category,
      price,
      school,
      imageUrl
    });

    // Increment listingsCount for the user
    await User.findByIdAndUpdate(req.user.id, { $inc: { listingsCount: 1 } });

    // Populate username + listingsCount before sending response
    const populatedListing = await newListing.populate("userId", "username listingsCount");

    res.status(201).json({ success: true, listing: populatedListing });
  } catch (err) {
    console.error("Create listing error:", err);
    res.status(500).json({ success: false, message: "Failed to create listing" });
  }
};

// Get all listings
exports.getAllListings = async (req, res) => {
  try {
    const query = { status: "approved" };

    if (req.query.school) query.school = req.query.school;
    if (req.query.category) query.category = req.query.category;
    if (req.query.boosted === "true") query.isBoosted = true;

    const listings = await Listing.find(query)
      .sort({ createdAt: -1 })
      .populate("userId", "username listingsCount");

    res.status(200).json({ success: true, listings });
  } catch (err) {
    console.error("Fetch listings error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch listings" });
  }
};

// Get listing by ID
exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate("userId", "username listingsCount");

    if (!listing) {
      return res.status(404).json({ success: false, message: "Listing not found" });
    }

    res.status(200).json({ success: true, listing });
  } catch (err) {
    console.error("Get listing error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch listing" });
  }
};

// Boost listing
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
