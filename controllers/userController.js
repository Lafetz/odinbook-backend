const User = require("../models/user");
exports.User_Request = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.body.id },
      { $push: { friendRequest: req.user._id } }
    );
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.User_Accept = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: { friendList: req.body.id },
        $pull: { friendRequest: req.body.id },
      }
    );
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.User_Reject = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { friendRequest: req.body.id } }
    );
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.User_Remove = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { friendList: req.body.id } }
    );
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.User_Owner = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.User_Profile = async (req, res, next) => {
  console.log("this is user profile");
  try {
    const user = await User.findById(req.params.userID);
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
