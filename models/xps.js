const mongoose = require("mongoose");
// const dbs = process.env.MONGODB_URL;
// mongoose.connect(dbs, {
//   useNewUrlParser: true,
// });


const xpSchema = mongoose.Schema({
  userID: String,
  username: String,
  serverID: String,
  Xp: Number
});

const xp = mongoose.model('xp', xpSchema);
modules.export.xp = xp;
