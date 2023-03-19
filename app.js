const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const verifyUser = require("./middleware/verifyUser");
const user = require("./routes/user");
const post = require("./routes/post");
const userAuth = require("./routes/userAuth");
const cors = require("cors");
const app = express();
const { saveProfileImage } = require("./firebase/firebase.js");
try {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MongoDB);
} catch (err) {
  console.log(err);
}
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use();
app.post("/image", async (req, res, next) => {
  console.log(req.body);
  saveProfileImage("testimage", req.body.imag);
});
app.use("/user", verifyUser, user);
app.use("/auth", userAuth);
app.use("/posts", verifyUser, post);
app.listen(process.env.PORT, () => {
  console.log(`server on ${process.env.PORT}`);
});
