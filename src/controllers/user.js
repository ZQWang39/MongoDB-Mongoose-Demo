const User = require("../models/user");
const { tokenGenerator } = require("../utils/jwt");

async function addUser(req, res, next) {
  const { username, password } = req.body;
  const exsitingUser = await User.findOne({ username }).exec();
  if (exsitingUser) {
    return res.sendStatus(409); //Conflict
  }
  const user = new User({
    username,
    password,
  });

  await user.save();
  const token = tokenGenerator({ id: user._id });
  return res.status(201).json({ token, username });
}

module.exports = {
  addUser,
};
