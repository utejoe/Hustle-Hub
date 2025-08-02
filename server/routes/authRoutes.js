const express = require("express");
const router = express.Router();
const { signup, login, updatePassword, resetPassword } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.put("/update-password/:id", updatePassword);     // requires current password
router.put("/reset-password/:id", resetPassword); 

module.exports = router;
