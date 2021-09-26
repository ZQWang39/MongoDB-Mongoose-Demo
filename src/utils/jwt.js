const jwt = require("jsonwebtoken");

const { JWT_KEY } = process.env;

function generateToken(payload) {
  return jwt.sign(payload, JWT_KEY, { expiresIn: "6h" });
}

function validateToken(token) {
  // return jwt.verify(token, JWT_KEY);
  try {
    jwt.verify(token, JWT_KEY);
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = { generateToken, validateToken };
