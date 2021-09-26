const express = require("express");
const courseRouter = require("./course");
const studentRouter = require("./student");
const userRouter = require("./user");
const authRouter = require("./auth");

const router = express.Router();

router.use("/courses", courseRouter);
router.use("/students", studentRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;
