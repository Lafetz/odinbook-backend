const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MongoDB);
//app.use('/',)
app.listen(process.env.PORT, () => {
  console.log(`server on ${process.env.PORT}`);
});
