const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
// const xpInfo = require('./xp.json');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const Models = require("./models");
const dbs = process.env.MONGODB_URL

let txp;

mongoose.connect(dbs, {
  useNewUrlParser: true,
});

// mongoose.connect('mongodb://localhost/test', {
//   useNewUrlParser: true,
// });


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
//message
client.on('message', message => {
  if(message.channel.type === "dm") return;
	if(message.author.bot) return;

  // if(xpInfo[message.author.id]) {
  //   console.log('work')
  //   xpInfo[message.author.id].xp += 5;
  // }



  let prefix = "!";
	let messageArray = message.content.split(" ");
	let args = messageArray.slice(1);
	let command = messageArray[0];

  if(!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length));

	if(cmd) cmd.run(client, message, args);
  // console.log(xpInfo);
});


client.login(process.env.BOT_TOKEN);
