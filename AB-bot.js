const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
  console.log('I am ready!');
});

client.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
	if(err) console.log(err);

	//split the file name by "."(testing.js -> ["testing", "js"] and if the last element is "js", it gets added
	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(files.length <= 0) {
		console.log("There are no commands in this folder.");
		return;
	}
	console.log(`Loading ${jsfiles.length} files`);
	//goes through the files, requires each one, and sets it in the commands map, name as key and file as value
	jsfiles.forEach((f, i) => {
		let getFile = require(`./commands/${f}`)
		console.log(`File ${i+1}: ${f}`);
		client.commands.set(getFile.help.name, getFile);
	});
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
  //random number command
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
