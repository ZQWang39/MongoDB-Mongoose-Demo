require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes/index");

PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(helmet());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Servering is running on port ${PORT}...`);
});
