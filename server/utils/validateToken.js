const jwt = require("jsonwebtoken");

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { valid: true, user: decoded }; // usually contains { id: ... }
  } catch (err) {
    return { valid: false, error: "Invalid token" };
  }
};

module.exports = validateToken;
