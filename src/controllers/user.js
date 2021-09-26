const User = require("../models/user");

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
  return res.status(201).json(user);
}

module.exports = {
  addUser,
};
