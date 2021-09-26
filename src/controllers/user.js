const User = require("../models/user");
const { tokenGenerator } = require("../utils/jwt");

async function addUser(req, res, next) {
  const { userName, password } = req.body;
  const exsitingUser = await User.findOne({ userName: userName }).exec();
  if (exsitingUser) {
    res.sendStatus(409); //Conflict
  }
  const user = new User({
    userName,
    password,
  });

  await user.save();
  const token = tokenGenerator({ id: user._id });
  return res.status(201).json({ token, userName });
}

module.exports = {
  addUser,
};
