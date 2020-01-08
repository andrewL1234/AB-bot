const Discord = module.require("discord.js");
const mongoose = module.require("mongoose");
var xp = require("/app/models/xps.js");
// const dbs = process.env.MONGODB_URL;
// mongoose.connect(dbs, {
//   useNewUrlParser: true,
// });
let uId;


// const xp = mongoose.model('xp');

nUser.save(function (err, nUser) {
    if (err) return console.error(err);
    let nUser = new xp({ userID: uId });
  });
