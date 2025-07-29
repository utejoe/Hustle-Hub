const express = require("express");
const router = express.Router();
const { createListing, getAllListings, getListingById } = require("../controllers/listingController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createListing); // POST /api/listings
router.get("/", getAllListings);       // GET  /api/listings
router.get("/:id", getListingById);    // GET  /api/listings/:id

module.exports = router;
