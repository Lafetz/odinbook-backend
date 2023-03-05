const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
require("dotenv").config();
const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MongoDB);
app.use("/", routes);
app.listen(process.env.PORT, () => {
  console.log(`server on ${process.env.PORT}`);
});
