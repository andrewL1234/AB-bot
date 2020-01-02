const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if(message.channel.type === "dm") return;
	if(message.author.bot) return;

  let prefix = "!";
	let messageArray = message.content.split(" ");
	let args = messageArray.slice(1);
	let command = messageArray[0].slice(1);

  console.log(command)
  //if(!command.startsWith(prefix)) return;

  console.log(args)

  //say command
  if (command === 'say') {
    if(args.length !== 0) {
      message.channel.send(args.join(' '));
    } else {
      message.channel.send("Tell me what you want me to say");
    }
  }

  if (message.content.toLowerCase() === "hi") {
    console.log('works')
    message.channel.send('hi')
  }

});


client.login(process.env.BOT_TOKEN);
