const jwt = require("jsonwebtoken");

const secret = process.env.JWT_KEY;

function tokenGenerator(payload) {
  return jwt.sign(payload, secret, { expiresIn: "1d" });
}

function tokenValidator(token) {
  // return jwt.verify(token, JWT_KEY);
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

module.exports = { tokenGenerator, tokenValidator };
