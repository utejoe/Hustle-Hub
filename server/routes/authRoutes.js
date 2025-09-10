const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { signup, login, updatePassword, resetPassword, forgotPassword, updateProfile, getCurrentUser } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.put("/update-profile", authMiddleware, updateProfile);
router.post("/reset-password/:token", resetPassword);
router.put("/update-password/:id", updatePassword);
router.get("/current-user", authMiddleware, getCurrentUser);

module.exports = router;
