const mongoose = require("mongoose");

const Comment = require("./comment");
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    shared: { type: Boolean, required: true, default: false },

    postId: { type: Schema.Types.ObjectId, ref: "Post", default: null },
    timeStamp: { type: Date, default: Date.now() },
    content: { type: String, minLength: 1 },
    img: { type: Boolean, default: false },
    likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { toJSON: { virtuals: true } }
);
postSchema.virtual("imgUrl").get(function () {
  return `https://firebasestorage.googleapis.com/v0/b/nodebook-7d59d.appspot.com/o/post%2F${this._id}?alt=media&token=ce2e416e-4c4e-4036-8e63-1c296b2f08cb`;
});
module.exports = mongoose.model("Post", postSchema);
