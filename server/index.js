require("dotenv").config(); // Load .env

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const uploadRoute = require("./routes/upload");
const listingRoutes = require("./routes/listingRoutes");
const chatRoutes = require("./routes/chat");
const orderRoutes = require("./routes/order");
const adminRoutes = require("./routes/admin");


const port = process.env.PORT || 3300;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoute);
app.use("/api/listings", listingRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Basic Route
app.get("/", (req, res) => {
  res.send("Hustle Hub Loading");
});

// Start Server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error: " + error);
  }
});
