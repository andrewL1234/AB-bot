const Discord = module.require("discord.js");
const mongoose = require("mongoose");
const dbs = process.env.MONGODB_URL;
mongoose.connect(dbs, {
  useNewUrlParser: true,
});

//WHAT IS THE SERVER-ID FOR IN THE SCHEMA BRANODN

// mongoose.connect('mongodb://localhost/test', {
//   useNewUrlParser: true,
// });
const Schema = mongoose.Schema;


const xpSchema = new Schema({
  userID: String,
  username: String,
  serverID: String,
  xp: Number
});

const xp = mongoose.model('xp', xpSchema);

module.exports.run = (client, message, args) => {
  const profEmbed = new Discord.RichEmbed()
  let id = message.author.id; wait
  let usne = message.author.username;
  var server = message.guild.id;

  if(args.length === 0) {
    profEmbed.setTitle(`Profile`)
    let id = message.author.id;
  }
  else if(args.length === 1) {
    let  = message.mentions.users.first()
    if(!userRequired) {
      return message.channel.send("Either just type the command to see you profile or @ someone to see theirs")
    }
    profEmbed.setTitle(`Profile of ${userRequired.username}`)
  } else {
    //this is for !profile "thing" "thing" (2 args)
    return message.channel.send("Either just type the command to see you profile or @ someone to see theirs")
  }



  profEmbed.setColor("#06172e")
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL);

    var exp = new xp(
      {userID: id},
      {username: usne},
      {serverID: server},
      {xp: 12})

    console.log(exp.xp);
    profEmbed.addField(`User: ${}`)
    profEmbed.addField(`XP: ${exp.xp}`);

  // xp.findOne({
  //   userID: message.author.id,
  //   serverID: message.guild.id
  // }, (err, res) => {
  //   if (err) console.log(err);
  //
  //   if (!res) {
  //     profEmbed.addField("You do not appear to have any xp...");
  //   } else {
  //     console.log(res)
  //     profEmbed.addField(res.username, res.xp + "xp.");
  //     // profEmbed.addField(Xp.xp);
  //   }
  //
  // })

  message.channel.send(profEmbed);
}
//yeet f
module.exports.help = {
  name: "profile"
};
