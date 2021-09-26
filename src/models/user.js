const mongoose = require("mongoose");

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
