const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if(message.channel.type === "dm") return;
	if(message.author.bot) return;

  let prefix = "~";
	let messageArray = message.content.split(" ");
	let args = messageArray.slice(1);
	let command = messageArray[0];

  if(!command.startsWith(prefix)) return;

  //reply command
  if (command === 'say') {
    message.channel.send(args.join(' '));
  }

  // if (message.content.toLowerCase() === 'hi') {
  //   message.reply('hello');
  // }
});


client.login(process.env.BOT_TOKEN);
