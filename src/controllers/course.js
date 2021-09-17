const Course = require("../models/course");

async function addCourse(req, res) {
  const { name, code, description } = req.body;
  //need to valid data
  const course = new Course({
    name,
    code,
    description,
  });
  await course.save();
  return res.json(course);
}

async function getAllCourse(req, res) {
  const courses = await Course.find();
  res.json(courses);
}
function getCourseById(req, res) {}
function updateCourseById(req, res) {}

function deleteCourseById(req, res) {}

module.exports = {
  addCourse,
  getAllCourse,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};
