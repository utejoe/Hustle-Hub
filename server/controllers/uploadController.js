const cloudinary = require("cloudinary").v2;

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: "No file uploaded" });

    const fileStr = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    const result = await cloudinary.uploader.upload(fileStr, {
      folder: "campus-hustle-listings"
    });

    res.status(200).json({ success: true, imageUrl: result.secure_url });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ success: false, message: "Image upload failed" });
  }
};
