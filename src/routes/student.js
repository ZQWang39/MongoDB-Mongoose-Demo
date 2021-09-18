const express = require("express");
const {
  getAllStudents,
  addStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} = require("../controllers/student");

const router = express.Router();

router.post("", addStudent);
router.get("", getAllStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudentById);

module.exports = router;
