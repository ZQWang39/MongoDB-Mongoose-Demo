const mongoose = require("mongoose");
const Joi = require("joi");
// Validate library: joi, express-validator, validator.js
const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true, //会帮我们删除掉多余的空格
      minLength: 1, //设置最小字符长度·
      maxLength: 25, //设置最大字符长度·
    },
    lastName: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 25,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (email) => {
          return !Joi.string().email().validate(email).error;
          //const validation = Joi.string().email().validate(email);
          //const {error} = validation.error;
          //if(error){
          //     return false;
          //   }
          //   return true;
        },
        message: "Invalid email format...",
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const model = mongoose.model("Student", schema);

module.exports = model;
