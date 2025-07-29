require("dotenv").config(); // Load .env

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const uploadRoute = require("./routes/upload");


const port = process.env.PORT || 3300;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(cors());
app.use("/api/upload", uploadRoute);

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
