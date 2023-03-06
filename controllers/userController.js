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
