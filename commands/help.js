const Discord = module.require("discord.js");
const fs = module.require("fs");
const cmdDescriptions = {
	"!box": "Opens a box",
	"!help": "Bot help",
	"!onlineusers": "Gets the amount of online users",
	"!risk": "Risk xp",
	"!rng": "Random Number Generator",
	"!roll": "Roll dice",
	"!rps": "Rock, paper, scissors",
	"!timer": "Set a timer",
	"!userinfo": "Get the info of an user"
}

module.exports.run = (client, message, args) => {
	const helpEmbed = new Discord.RichEmbed()
	.setTitle("Bot Help")
	.setColor("#3afbff")

	let times = 0;
	while(for item in Object.keys(cmdDescriptions)) {
		let command = jsfiles[times].split(".")[0];
		helpEmbed.addField(`**${item}**`, `${cmdDescriptions.item}`);
		times++;
	}

	return message.channel.send(helpEmbed);
}

module.exports.help = {
	name: "help"
};
