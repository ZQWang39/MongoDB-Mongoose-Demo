const express = require("express");
const {
  getAllStudents,
  addStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  addCourseToStudent,
} = require("../controllers/student");

const router = express.Router();

router.post("", addStudent);
router.get("", getAllStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudentById);
router.post("/:id/courses/:code", addCourseToStudent);

module.exports = router;
