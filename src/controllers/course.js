const Course = require("../models/course");
const Student = require("../models/student");
const Joi = require("joi");

async function getAllCourses(req, res) {
  const courses = await Course.find().exec(); //add .exec() at the end of the query means the query has finished and a standard Promise.
  res.status(201).json(courses);
}

async function addCourse(req, res) {
  // const { name, code, description } = req.body;
  // validate data
  const stringValidator = Joi.string().required();
  const schema = Joi.object({
    name: stringValidator,
    code: stringValidator.regex(/^[a-zA-Z]+[0-9]+$/),
    description: Joi.string(),
  });
  const { name, code, description } = await schema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknown: true,
  });
  const exsitingCourse = await Course.findById(code).exec();
  if (exsitingCourse) {
    res.sendStatus(409); //Conflict
  }
  const course = new Course({
    name,
    description,
    code,
  });

  await course.save();
  return res.status(201).json(course);
}
async function getCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findById(id).exec();
  if (!course) {
    return res.sendStatus(404);
  }
  return res.status(201).json(course);
}
async function updateCourseById(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;
  // updateOne {_id:id},{}
  const course = await Course.findByIdAndUpdate(
    id,
    { name, description },
    { new: true } //如果没有这一项，返回的将是update之前的数据，加了为true的情况下update之后的data
  ).exec();
  if (!course) {
    return res.sendStatus(404);
  }
  return res.status(201).json(course);
}
async function deleteCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findByIdAndDelete(id).exec();
  if (!course) {
    return res.sendStatus(404);
  }
  await Student.updateMany(
    { courses: course._id },
    { $pull: { courses: course._id } }
  ).exec();
  return res.sendStatus(204);
  //return res.json(course);
}

module.exports = {
  getAllCourses,
  addCourse,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};
