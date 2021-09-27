const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//mongoose有这个功能，当然也可以把此方法写在utils然后在user.js调用；
//在mongoose中写自定义函数在函数名字前面要加 schema.methods.functionName
schema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 12);
};
schema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const model = mongoose.model("User", schema);

module.exports = model;

// const {Schema, model} = require("mongoose");

// const schema = new Schema({
//   userName: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// module.exports= model("User", schema);;
