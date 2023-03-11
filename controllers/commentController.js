const Comment = require("../models/comment");
const Post = require("../models/post");

exports.Add_comment = async (req, res, next) => {
  try {
    const comment = new Comment({
      postId: req.params.postId,
      userId: req.user._id,
      content: req.body.content,
    });
    const savedComment = await comment.save();

    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.Remove_comment = async (req, res, next) => {
  try {
    const comment = await Comment.deleteOne({ _id: req.params.commentId });

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
