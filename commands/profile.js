const Discord = module.require("discord.js");
const mongoose = require("mongoose");

const xp = require("/app/models/xps.js").xp;
// const dbs = process.env.MONGODB_URL;
// mongoose.connect(dbs, {
//   useNewUrlParser: true,
// });

//WHAT IS THE SERVER-ID FOR IN THE SCHEMA BRANODN



// const xp = mongoose.model('xp');
//()
module.exports.run = (client, message, args) => {
  const profEmbed = new Discord.RichEmbed()
  let id;
  let usne = message.author.username;
  let server = message.guild.id;

  if(args.length === 0) {
    profEmbed.setTitle(`Profile`)
    let id = message.author.id;
  }
  else if(args.length === 1) {
    let id = message.mentions.users.first()
    if(!id) {
      return message.channel.send("Either just type the command to see you profile or @ someone to see theirs")
    }
    profEmbed.setTitle(`Profile of ${userRequired.username}`)
  } else {
    //this is for !profile "thing" "thing" (2 args)
    return message.channel.send("Either just type the command to see you profile or @ someone to see theirs")
  }



  profEmbed.setColor("#06172e")
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL);

    // var exp = new xp(
    //   {userID: id},
    //   {username: usne},
    //   {serverID: server},
    //   {xp: 12})

    const exp = new xp({

      userId: id,
      username: usne,
      Xp: 10
    });
    exp.save()
      .catch(err => console.log(err));
    console.log(exp.Xp);
    profEmbed.addField(`User: ${exp.usne}`);
    profEmbed.addField(`Server: ${client.guilds.get(server)}`);
    profEmbed.addField(`XP: ${exp.Xp}`);



  message.channel.send(profEmbed);
}
//yeet f
module.exports.help = {
  name: "profile"
};
