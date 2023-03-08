const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const verifyUser = require("./middleware/verifyUser");
const user = require("./routes/user");
const post = require("./routes/post");
const userAuth = require("./routes/userAuth");
const cors = require("cors");
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MongoDB);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use();
app.use("/user", verifyUser, user);
app.use("/auth", userAuth);
app.use("/posts", verifyUser, post);
app.listen(process.env.PORT, () => {
  console.log(`server on ${process.env.PORT}`);
});
