const jwt = require("jsonwebtoken");

const { JWT_KEY } = process.env;

function tokenGenerator(payload) {
  return jwt.sign(payload, JWT_KEY, { expiresIn: "6h" });
}

function tokenValidator(token) {
  // return jwt.verify(token, JWT_KEY);
  try {
    return jwt.verify(token, JWT_KEY);
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = { tokenGenerator, tokenValidator };
