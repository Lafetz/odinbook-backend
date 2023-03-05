const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  content: { type: String, minLength: 1, required: true },
  imgUrl: { type: String, minLength: 1 },
  likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
