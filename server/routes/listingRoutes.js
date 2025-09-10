// server/routes/listingRoutes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  createListing,
  getAllListings,
  getListingById,
  boostListing
} = require("../controllers/listingController");

const vendorMiddleware = require("../middleware/vendorMiddleware");
const auth = require("../middleware/authMiddleware");

// Routes
router.post("/", auth, vendorMiddleware, upload.single("imageUrl"), createListing);
router.get("/", getAllListings);
router.get("/:id", getListingById);
router.put("/:id/boost", auth, boostListing);

module.exports = router;
