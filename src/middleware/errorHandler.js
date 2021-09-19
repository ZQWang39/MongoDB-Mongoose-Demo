module.exports = (error, req, res, next) => {
  //Better use winston to log the error, send to monitoring system
  //   console.log(error);
  //   return res
  //     .status(500)
  //     .send("Something worong happened, please have a check...");
  if (error.name === "ValidationError") {
    // const errorMessage = error.details;
    // console.log(errorMessage);
    //object manipulation
    //error.details.map().
    // return res.status(400).json(error)
    // return res.status(400).json(error.details[0].message);
    if (process.env.NODE_ENV === "production") {
      return res
        .status(400)
        .json(error.details.map((detail) => detail.message));
    } else {
      return res.status(400).json(error);
    }
  }
};
