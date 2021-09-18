const Student = require("../models/student");

async function getAllStudents(req, res) {
  const students = await Student.find().exec();
  res.json(students);
}

async function addStudent(req, res) {
  const { firstName, lastName, email } = req.body;
  // validate data
  const student = new Student({
    firstName,
    lastName,
    email,
  });

  await student.save();
  return res.status(201).json(student);
}
async function getStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findById(id).exec();
  if (!student) {
    return res.sendStatus(404);
  }
  return res.json(student);
}
async function updateStudentById(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  const student = await Student.findByIdAndUpdate(
    id,
    { firstName, lastName, email },
    { new: true }
  ).exec();
  if (!student) {
    return res.sendStatus(404);
  }
  return res.json(student);
}
async function deleteStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findByIdAndDelete(id).exec();
  if (!student) {
    return res.sendStatus(404);
  }
  return res.sendStatus(204);
}

module.exports = {
  getAllStudents,
  addStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
