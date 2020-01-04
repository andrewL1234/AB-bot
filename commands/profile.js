const Discord = module.require("discord.js");
const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://${process.env.MUSERNAME}:${process.env.MPASSWORD}@ab-bot-wohsi.mongodb.net/xp', {
  useNewUrlParser: true,
});



mongoose.connect('mongodb://localhost/test', {
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

module.exports.run = (client, message, args) => {
  var id = message.author.id;
  var usne = message.author.username;
  var server = message.guild.id;
  const pEmbed = new Discord.RichEmbed()
    .setTitle("Profile")
    .setColor("#06172e")
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL);

    var xpp = new xp(
      //{userID: id},
      //{username: usne},
      //{serverID: server},
      {xp: 12})
    console.log(xpp.xp);

    pEmbed.addField(xpp);
  // xp.findOne({
  //   userID: message.author.id,
  //   serverID: message.guild.id
  // }, (err, res) => {
  //   if (err) console.log(err);
  //
  //   if (!res) {
  //     pEmbed.addField("You do not appear to have any xp...");
  //   } else {
  //     console.log(res)
  //     pEmbed.addField(res.username, res.xp + "xp.");
  //     // pEmbed.addField(Xp.xp);
  //   }
  //
  // })
  message.channel.send(pEmbed)
}
//yeet f
module.exports.help = {
  name: "profile"
};
