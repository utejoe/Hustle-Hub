
// server/routes/upload.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "Hustle_HUb",
    });

    // Delete file from local uploads after Cloudinary upload
    fs.unlinkSync(req.file.path);

    res.status(200).json({ success: true, url: result.secure_url });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ success: false, message: "Upload failed" });
  }
});

module.exports = router;
