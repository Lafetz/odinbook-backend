const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
mongoose.set("strictQuery", false);
mongoose.connect();
app.get("/", (req, res, next) => {
  res.send("hello world");
});
app.listen(3000, () => {
  console.log("port 3000!");
});
