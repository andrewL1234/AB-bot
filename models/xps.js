const mongoose = require("mongoose");
// const dbs = process.env.MONGODB_URL;
// mongoose.connect(dbs, {
//   useNewUrlParser: true,
// });


const Schema = mongoose.Schema;

const xpSchema = new Schema({
  userID: String,
  username: String,
  Xp: Number
});

const xp = mongoose.model('xp', xpSchema);
module.exports.xp = xp;
