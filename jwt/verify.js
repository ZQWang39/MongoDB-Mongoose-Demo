const jwt = require("jsonwebtoken");

const token = jwt.sign({ id: "XYZ" }, "secret", { expiresIn: "6h" });

// 2 errors often happend: jwt expired, invalid signature
const decoded = jwt.verify(token, "secret");
console.log(decoded);
