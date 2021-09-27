const User = require("../models/user");
const { tokenGenerator } = require("../utils/jwt");

async function login(req, res, next) {
  const { username, password } = req.body;
  const exsitingUser = await User.findOne({ username }).exec();
  if (!exsitingUser) {
    return res.status(401).json(`Invalid user name or password...`); //Conflict
  }
  if (!(await exsitingUser.validatePassword(password))) {
    return res.status(401).json(`Invalid user name or password...`);
  }
  const token = tokenGenerator({ id: exsitingUser._id });

  return res.json({ token }); //{{ token, userName }}
}

module.exports = {
  login,
};
