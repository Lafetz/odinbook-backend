const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sharedPostSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
});
module.exports = mongoose.model("SharedPost", sharedPostSchema);
