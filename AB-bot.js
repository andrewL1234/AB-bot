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
	let command = messageArray[0];

  if(!command.startsWith(prefix)) return;


  //say command
  if (command === '!say') {
    if(args.length !== 0) {
      message.channel.send(args.join(' '));
    } else {
      message.channel.send("Tell me what you want me to say");
    }
  }

  if (command === '!rng') {
    const minimum = Number(args[0]);
  	const maximum = Number(args[1]);
  	if(args.length !== 2) {
  		return message.channel.send("Enter TWO numbers after the command");

  	}
  	else if(isNaN(minimum) || isNaN(maximum)) {
  		return message.channel.send("Enter two NUMBERS after the command");
  	}
    else if(maximum <= minimum) {
      return message.channel.send("The first number has to be smaller than the second")
    } else {
  		const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
  		message.channel.send(`Your random number was ${randomNumber}`);
  	}
  }



});


client.login(process.env.BOT_TOKEN);
