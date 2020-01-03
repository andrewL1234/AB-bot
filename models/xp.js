const mongoose = require("mongoose");

const xpSchema = mongoose.Schema({
  userID: String,
  username: String,
  serverID: String,
  xp: Number
});

module.exports = mongoose.model("xp", xpSchema)
