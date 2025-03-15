const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });
console.log("starting server");
mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(() => console.log("MongoDB connected successfully"));

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port : ${process.env.PORT}`);
});
