const app = require("./app");

const connectToDB = require("./utils/db");

PORT = process.env.PORT || 3000;

connectToDB(); //因为我们已经对connection的几种情况进行了逻辑处理所以这里不需要.then（）处理。

app.listen(PORT, () => {
  console.log(`Servering is running on port ${PORT}...`);
});
