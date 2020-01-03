const Discord = module.require("discord.js");
const mongoose = require("mongoose")
await mongoose.connect('mongodb://localhost/local', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports.run = (client, message, args) => {

  const pEmbed = new Discord.RichEmbed()
  .setTitle("Profile")
  .setColor("#06172e")
  .setFooter(`${message.author.username}`, message.author.displayAvatarURL)
  message.channel.send(pEmbed);
}
//yeet
module.exports.help = {
	name: "profile"
};
