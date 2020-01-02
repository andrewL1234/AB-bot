const Discord = module.require("discord.js");

module.exports.run = (client, message, args) => {

  const pEmbed = new Discord.RichEmbed()
  .setTitle("Bot Help")
  .setColor("#06172e")
  message.channel.send(pEmbed);
}
//yeet
module.exports.help = {
	name: "profile"
};
