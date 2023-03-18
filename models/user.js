const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
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
  imgUrl: { type: String, minLength: 1, default: null },
  friendList: [{ type: Schema.Types.ObjectId, ref: "User" }],
  friendRequest: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
module.exports = mongoose.model("User", userSchema);
