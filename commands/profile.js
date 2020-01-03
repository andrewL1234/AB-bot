const Discord = module.require("discord.js");
const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://${process.env.MUSERNAME}:${process.env.MPASSWORD}@ab-bot-wohsi.mongodb.net/xp', {
  useNewUrlParser: true,
});
const xp = require("../models/xp.js");
const Xp = mongoose.model('Xp', mySchema);

module.exports.run = (client, message, args) => {

  const pEmbed = new Discord.RichEmbed()
    .setTitle("Profile")
    .setColor("#06172e")
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL);

  xp.findOne({
    userID: message.author.id,
    serverID: message.guild.id
  }, (err, res) => {
    if (err) console.log(err);

    if (!res) {
      pEmbed.addField("You do not appear to have any xp...");
    } else {
      console.log(res)
      // pEmbed.addField(res.username, res.xp + "xp.");
      pEmbed.addField(Xp.xp);
    }

  })
  message.channel.send(pEmbed)
}
//yeet f
module.exports.help = {
  name: "profile"
};
