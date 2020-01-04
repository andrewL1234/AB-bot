const Discord = module.require("discord.js");
const mongoose = require("mongoose")
const dbs = process.env.MONGODB_URL
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
  if(args.length === 0) {
    let id = message.author.id;
  }
  else if(args.length === 1) {
    let userRequired = message.mentions.users.first()
    if(!userRequired) {
      return message.channel.send("Either just type the command to see you profile or @ someone to see theirs")
    }
  } else {
    //this is for !profile "thing" "thing" (2 args)
    return message.channel.send("Either just type the command to see you profile or @ someone to see theirs")
  }
  let userName = message.author.username;
  var server = message.guild.id;
  const pEmbed = new Discord.RichEmbed()
    .setTitle("Profile")
    .setColor("#06172e")
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL);


    var xpp = new xp(
      //{userID: id},
      //{username: usne},
      //{serverID: server},
      {xp: 12})
    console.log(xpp.xp);

    pEmbed.addField("**XP**", xpp.xp);

  // xp.findOne({
  //   userID: message.author.id,
  //   serverID: message.guild.id
  // }, (err, res) => {
  //   if (err) console.log(err);
  //
  //   if (!res) {
  //     pEmbed.addField("You do not appear to have any xp...");
  //   } else {
  //     console.log(res)
  //     pEmbed.addField(res.username, res.xp + "xp.");
  //     // pEmbed.addField(Xp.xp);
  //   }
  //
  // })
  message.channel.send(pEmbed)
}
//yeet f
module.exports.help = {
  name: "profile"
};
