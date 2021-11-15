const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('process.env.MONGO_URI');
}
const db = mongoose.connection;
db.once('open', function() {
    console.log(`we're connected!`);
  });


module.exports = main;