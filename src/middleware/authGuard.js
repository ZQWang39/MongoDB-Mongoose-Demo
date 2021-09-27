const { tokenValidator } = require("../utils/jwt");

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.sendStatus(401); // Unauthorized
  }
  const authArray = authHeader.split(" ");
  if (authArray.length !== 2 || authArray[0] !== "Bearer") {
    return res.sendStatus(401); // Unauthorized
  }
  const decoded = tokenValidator(authArray[1]);
  // console.log(authHeader);
  if (decoded) {
    //if decode valid, we can pass the decode data to req.user,
    //so that we can pass some data to token and use in the next step.
    //for examples: user role, permissions....
    req.user = decoded;
    return next();
  } else {
    return res.sendStatus(401);
  }
};
