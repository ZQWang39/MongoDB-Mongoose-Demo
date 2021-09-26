const jwt = require("jsonwebtoken");

//jwt.sign({ payload:id, username.... }, "secret:any", { expiresIn: "expiry day" })
const token = jwt.sign({ id: "XYZ" }, "secret", { expiresIn: "6h" });

// console.log(token);
