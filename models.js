const mongoose = require("mongoose")
const xps = require("./models/xps.js");

const dbs = process.env.MONGODB_URL;
mongoose.connect(dbs, {
  useNewUrlParser: true,
});

var db = mongoose.connection;

// const xp = mongoose.model('xp');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB successfully');
});
const xp = mongoose.model("xp", xps.xpSchema);

module.exports.xp = xp;
