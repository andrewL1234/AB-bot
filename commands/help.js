const Discord = module.require("discord.js");
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
	for(item in Object.keys(cmdDescriptions)) {
		helpEmbed.addField(`**${Object.keys(cmdDescriptions)[item]}**`, `${Object.values(cmdDescriptions)[item]}`);
		times++;
	}

	return message.channel.send(helpEmbed);
}

module.exports.help = {
	name: "help"
};
