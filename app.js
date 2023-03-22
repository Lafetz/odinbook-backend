const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const verifyUser = require("./middleware/verifyUser");
const user = require("./routes/user");
const post = require("./routes/post");
const userAuth = require("./routes/userAuth");
const cors = require("cors");
const app = express();

try {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MongoDB);
} catch (err) {
  console.log(err);
}
app.use(
  cors({
    origin: ["https://lafetz.github.io", "http://localhost:3000"],
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user", verifyUser, user);
app.use("/auth", userAuth);
app.use("/posts", verifyUser, post);
app.listen(process.env.PORT, () => {
  console.log(`server on ${process.env.PORT}`);
});
