const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Xp = new Schema({
  userID: String,
  username: String,
  serverID: String,
  xp: Number
});

module.exports = mongoose.model("xp", xpSchema)
