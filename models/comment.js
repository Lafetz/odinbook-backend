const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  content: { type: String, minLength: 1, required: true },
});
module.exports = mongoose.model("Comment", commentSchema);
