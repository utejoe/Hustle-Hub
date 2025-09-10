const cloudinary = require("cloudinary").v2;
const User = require("../models/User");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

exports.uploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const fileStr = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    const result = await cloudinary.uploader.upload(fileStr, {
      folder: "campus-hustle-avatars"
    });

    const user = await User.findByIdAndUpdate(
      req.user.id, // from auth middleware
      { avatarUrl: result.secure_url },
      { new: true }
    );

    res.json({ success: true, avatarUrl: user.avatarUrl });
  } catch (err) {
    console.error("Avatar upload error:", err);
    res.status(500).json({ success: false, message: "Failed to upload avatar" });
  }
};

exports.getCurrentUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("username avatarUrl isVerified isVendor");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user });
  } catch (err) {
    console.error("Fetch current user profile error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch profile" });
  }
};


exports.removeAvatar = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { avatarUrl: "" },
      { new: true }
    );

    res.json({ success: true, avatarUrl: "" });
  } catch (err) {
    console.error("Avatar removal error:", err);
    res.status(500).json({ success: false, message: "Failed to remove avatar" });
  }
};
