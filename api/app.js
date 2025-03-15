const express = require("express");
const bookRouter = require("./routes/bookRoutes");

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({
//     status: "success",
//     data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   });
// });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Set the allowed origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE"); // Specify the allowed methods
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Specify the allowed headers
  next();
});

app.use("/books", bookRouter);

module.exports = app;
