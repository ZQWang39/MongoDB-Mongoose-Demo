require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes/index");
const connectToDB = require("./utils/db");

PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(helmet());

app.use("/api", routes);

connectToDB(); //因为我们已经对connection的几种情况进行了逻辑处理所以这里不需要.then（）处理。

app.listen(PORT, () => {
  console.log(`Servering is running on port ${PORT}...`);
});
