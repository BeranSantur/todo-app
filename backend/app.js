const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoRouter = require("./routes/todo-router");

dotenv.config();

const app = express();
app.use(express.json());
app.use("/todos", todoRouter);

mongoose.connect(process.env.DB_CONNECTION, (err) => {
  if (err) {
    throw err;
  }
  console.log("Db has been connected!");
});

app.listen(5000, () => {
  console.log("Application is up on port 5000..");
});
