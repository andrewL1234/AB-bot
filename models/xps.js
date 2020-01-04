// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//
// var ObjectId = mongoose.Schema.Types.ObjectId;
// var models = require('./');
// var autopopulate = require('mongoose-autopopulate');
//
// const Xp = new Schema({
//   userID: String,
//   username: String,
//   serverID: String,
//   xp: Number
// });
// var caseNote = mongoose.model('Xp');
// var xpSchema = caseNote.discriminator('Xp', xpShema_raw);
// var xp = mongoose.model('Xp');
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://${process.env.MUSERNAME}:${process.env.MPASSWORD}@ab-bot-wohsi.mongodb.net/xp', {
  useNewUrlParser: true,
});
const Schema = mongoose.Schema;


const xpSchema = new Schema({
  userID: String,
  username: String,
  serverID: String,
  xp: Number
});

const xp = mongoose.model('xp', xpSchema);
const routes = require('./routes')
// exports.xpSchema = xpSchema;
// module.exports = xp;
//( ͡° ͜ʖ ͡°)
