// server/routes/admin.js
const express = require("express");
const router = express.Router();
const {
  loginAdmin,
  approveListing,
  rejectListing
} = require("../controllers/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/login", loginAdmin);

router.put("/approve/:id", adminMiddleware, approveListing);
router.put("/reject/:id", adminMiddleware, rejectListing);

module.exports = router;
