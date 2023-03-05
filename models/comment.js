const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  content: { type: String, minLength: 1, required: true },
  imgUrl: { type: String, minLength: 1 },
});
module.exports = mongoose.model("Comment", commentSchema);
