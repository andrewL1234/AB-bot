const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var caseNote = mongoose.model('xp');


const Xp = new Schema({
  userID: String,
  username: String,
  serverID: String,
  xp: Number
});

var xpSchema = caseNote.discriminator('xp', xpShema_raw);
var xp = mongoose.model('xp');

exports.xpSchema = xpSchema;
module.exports = xp;
//( ͡° ͜ʖ ͡°)
