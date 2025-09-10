const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { uploadAvatar, removeAvatar, getCurrentUserProfile } = require("../controllers/avatarController");
const authMiddleware = require("../middleware/authMiddleware"); // assumes you have one

router.post("/upload-avatar", authMiddleware, upload.single("avatar"), uploadAvatar);
router.delete("/remove-avatar", authMiddleware, removeAvatar);
router.get("/current-user", authMiddleware, getCurrentUserProfile);

module.exports = router;
