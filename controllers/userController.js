const User = require("../models/user");
const bcrypt = require("bcryptjs");
exports.User_signup = async (req, res, next) => {
  try {
    const hashedpassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      Name: req.body.Name,
      email: req.body.email,
      username: req.body.username,
      password: hashedpassword,
      friendList: [],
      friendRequest: [],
    });
    await user.save();
    res.status(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.User_Login = async (req, res, next) => {
  try {
    const user = await User.find({ username: req.body.username });
    if (user.length === 0) {
      return res.status(401).json({ msg: "user name not found" });
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user[0].password
    );
    if (!passwordMatch) {
      return res.status(401).json({ msg: "wrong password" });
    }
    const accessToken = jwt.sign(user[0].toJSON(), process.env.TOP_KEY);
    res.status(200).json(accessToken);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.verifyUser = async (req, res, next) => {
  try {
    const header = req.headers.Authorization;
    console.log("header log", header);
    if (!header) {
      return res.status(401).end();
    }
    const token = header.split(" ")[1];
    console.log("token log", token);
    const data = jwt.verify(token, process.env.TOP_KEY);
    req.user = data;
    next();
  } catch (err) {
    res.status(500).json(err.message);
  }
};
