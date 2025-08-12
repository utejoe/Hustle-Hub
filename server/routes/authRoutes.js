const express = require("express");
const router = express.Router();
const { signup, login, updatePassword, resetPassword, forgotPassword } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.put("/update-password/:id", updatePassword);

module.exports = router;
