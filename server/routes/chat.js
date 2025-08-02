const express = require("express");
const router = express.Router();
const { sendMessage, getChats } = require("../controllers/chatController");

// Send message
router.post("/", sendMessage);

// Get chat between two users for a listing
router.get("/:listingId/:user1/:user2", getChats);

module.exports = router;
