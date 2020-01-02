module.exports.run = (client, message, args) => {
  if(args.length !== 0) {
    message.channel.send(args.join(' '));
  } else {
    message.channel.send("Tell me what you want me to say");
  }
};

module.exports.help = {
	name: "say"
};
