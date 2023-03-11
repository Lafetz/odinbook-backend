const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  shared: { type: Boolean, required: true, default: false },
  postId: { type: Schema.Types.ObjectId, ref: "Post", default: null },
  timeStamp: { type: Date, default: Date.now() },
  content: { type: String, minLength: 1 },
  imgUrl: { type: String, minLength: 1, default: null },
  likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
module.exports = mongoose.model("Post", postSchema);
