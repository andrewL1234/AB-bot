const Discord = module.require("discord.js");
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/local', {
  useNewUrlParser: true,
});
const xp = require("../models/xp.js");

module.exports.run = (client, message, args) => {

  await message.delete()

  const pEmbed = new Discord.RichEmbed()
  .setTitle("Profile")
  .setColor("#06172e")
  .setThumbnail(`${message.author.username}`, message.author.displayAvatarURL);

xp.findOne({
  userID: message.author.id,
  serverID: message.guild.id
}, (err, res) => {
  if (err) console.log(err);

  if(!res) {
    pEmbed.addField("You do not appear to have any xp...");
  } else {
    pEmbed.addField(res.username, res.xp + "xp.");
  }


  message.channel.send(pEmbed)
})
}
//yeet
module.exports.help = {
	name: "profile"
};
