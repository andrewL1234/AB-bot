const mongoose = require("mongoose");

const Xp = new Schema({
  userID: String,
  username: String,
  serverID: String,
  xp: Number
});

module.exports = mongoose.model("xp", xpSchema)
