const express = require("express");
const courseRouter = require("./course");
const studentRouter = require("./student");
const userRouter = require("./user");

const router = express.Router();

router.use("/courses", courseRouter);
router.use("/students", studentRouter);
router.use("/user", userRouter);

module.exports = router;
