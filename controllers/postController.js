const Post = require("../models/post");
exports.All_posts = async (req, res, next) => {
  try {
    const posts = await Post.find({ userId: { $in: req.user.friendList } })
      .sort({ timeStamp: -1 })
      .exec();

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.Get_Post = async (req, res, next) => {
  try {
    const post = await Post.findById({ _id: req.params.postId }).exec();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.Add_Post = async (req, res, next) => {
  try {
    const post = new Post({
      userId: req.user._id,
      content: req.body.content,
    });
    await post.save();
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.Update_Post = async (req, res, next) => {
  try {
    await Post.findOneAndUpdate(
      { _id: req.params.PostId },
      { content: req.body.content }
    );
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.Remove_Post = async (req, res, next) => {
  try {
    await Post.deleteOne({ _id: req.params.postId });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
