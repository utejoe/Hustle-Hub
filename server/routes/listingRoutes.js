// server/routes/listingRoutes.js
const express = require("express");
const router = express.Router();
const {
  createListing,
  getAllListings,
  getListingById,
  boostListing
} = require("../controllers/listingController");
const auth = require("../middleware/authMiddleware");

// ✅ ROUTES
router.post("/", auth, createListing);        // POST /api/listings
router.get("/", getAllListings);              // GET  /api/listings
router.get("/:id", getListingById);           // GET  /api/listings/:id
router.put("/:id/boost", auth, boostListing); // PUT  /api/listings/:id/boost

module.exports = router;
