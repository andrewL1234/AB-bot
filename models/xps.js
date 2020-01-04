const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;
var models = require('./');
var autopopulate = require('mongoose-autopopulate');

const Xp = new Schema({
  userID: String,
  username: String,
  serverID: String,
  xp: Number
});
var caseNote = mongoose.model('Xp');
var xpSchema = caseNote.discriminator('Xp', xpShema_raw);
var xp = mongoose.model('Xp');

exports.xpSchema = xpSchema;
module.exports = xp;
//( ͡° ͜ʖ ͡°)
