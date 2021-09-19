const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      uppercase: true,
      alias: "code",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: " ",
    },
    // id: {
    //   type: String,
    //   select: false, //获取时不显示虚拟字段
    // },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true, // it will record the timestamps when add data to database
    toJSON: {
      virtuals: true, // In order to let the virtual part value return to frontend, hre should be "true"
    },
  }
);
//"code"可以是当时需要取任何名字，只在代码层面改变调用时的名字不敢变数据库内容.
//Same as alias:'code'
//可以通过virtual这个功能时间本地数据拼接等，比如 取到firstName，lastName pinjiechengfullName.
// schema.virtual('code').get(function(){
//     return this._id;
// })
//We give the name of "Course" to this model,
//in MongDB it will become a collection name which is "courses"

const model = mongoose.model("Course", schema);

module.exports = model;
