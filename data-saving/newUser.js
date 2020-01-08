const Discord = module.require("discord.js");
const mongoose = module.require("mongoose");
const xp = require("/app/models/xps.js").xp;// const dbs = process.env.MONGODB_URL;
// mongoose.connect(dbs, {
//   useNewUrlParser: true,
// });



// const xp = mongoose.model('xp');

nUser.save(function (err, nUser) {
    if (err) return console.error(err);
    const newDoc = new xp({
            userID: message.author.id,
            username: message.author.username,
            Xp: 10
  });
  newDoc.save().catch(err => console.log(err));
})
module.exports.nU;
