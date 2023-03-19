const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    Name: { type: String, minLength: 6, maxLength: 100, required: true },
    email: { type: String, minLength: 6, maxLength: 100, required: true },
    username: {
      type: String,
      minLength: 6,
      maxLength: 100,
      required: true,
      unique: true,
    },
    password: { type: String, minLength: 6, maxLength: 100, required: true },
    img: { type: Boolean, default: false },
    friendList: [{ type: Schema.Types.ObjectId, ref: "User" }],
    friendRequest: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { toJSON: { virtuals: true } }
);
userSchema.virtual("imgUrl").get(function () {
  return `https://firebasestorage.googleapis.com/v0/b/nodebook-7d59d.appspot.com/o/profile%2F${this._id}?alt=media&token=ce2e416e-4c4e-4036-8e63-1c296b2f08cb`;
});
module.exports = mongoose.model("User", userSchema);
