const express = require("express");
const {
  addCourse,
  getAllCourse,
  getCourseById,
  updateCourseById,
  deleteCourseById,
} = require("../controllers/course");

const router = express.Router();

router.post("", addCourse);
router.get("", getAllCourse);
router.get("/:id", getCourseById);
router.put("/:id", updateCourseById);
router.delete("/:id", deleteCourseById);

module.exports = router;
