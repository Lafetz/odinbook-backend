const Comment = require("../models/comment");
exports.All_comments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId })
      .sort({ timeStamp: -1 })
      .exec();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.Get_comment = async (req, res, next) => {
  try {
    const comment = await Comment.findById({
      _id: req.params.commentId,
    }).exec();
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.Add_comment = async (req, res, next) => {
  try {
    const comment = new Comment({
      postID: req.params.postId,
      userId: req.user._id,
      content: req.body.content,
    });
    await comment.save();
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.Update_comment = async (req, res, next) => {
  try {
    await Comment.findOneAndUpdate(
      { _id: req.params.commentId },
      { content: req.body.content }
    );
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.Remove_comment = async (req, res, next) => {
  try {
    await Comment.deleteOne({ _id: req.params.commentId });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
