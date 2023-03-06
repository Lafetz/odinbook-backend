const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const verifyUser = require("./middleware/verifyUser");
const user = require("./routes/user");
const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MongoDB);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(verifyUser);
app.use("/auth", user);
// app.use("/posts",post)
app.listen(process.env.PORT, () => {
  console.log(`server on ${process.env.PORT}`);
});
