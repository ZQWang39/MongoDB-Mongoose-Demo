const Student = require("../models/student");
const Course = require("../models/course");

async function getAllStudents(req, res) {
  const students = await Student.find().exec();
  res.status(201).json(students);
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
  //3 ways to caputure the error:
  // 1.student.save().then((result) => {}).catch(error => { })

  // 2.try{
  //   await student.save();
  // }catch(error) {
  //   console.error(error);
  // }

  // 3.student.save((error, result)=>{
  //   if(error){
  //     console.log(error.message);
  //     return next(error);
  //     return res.status(400).json({"error":"error mssage"})
  //   }
  //   return res.status(200).json(student);
  // })
}
async function getStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findById(id)
    .populate("courses", "name discription") //展开某一项目并选取想要显示的内容
    .exec();
  if (!student) {
    return res.sendStatus(404);
  }
  return res.status(201).json(student);
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
  return res.status(201).json(student);
}
async function deleteStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findByIdAndDelete(id).exec();
  if (!student) {
    return res.sendStatus(404);
  }
  return res.sendStatus(204);
  //return res.json(student);
}
async function addCourseToStudent(req, res) {
  const { id, code } = req.params;
  const student = await Student.findById(id).exec();
  const course = await Course.findById(code).exec();
  if (!student || !course) {
    return res.status(404).json("Student/Course not found!");
  } else {
    // student.courses.push();
    student.courses.addToSet(course._id); //addToSet()不重复添加
    course.students.addToSet(student._id);
    await student.save();
    await course.save();
    res.json(student);
  }
}

module.exports = {
  getAllStudents,
  addStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  addCourseToStudent,
};
