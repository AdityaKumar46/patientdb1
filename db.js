const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://hospital:xWmfEwBnOJlgjpEg@cluster0.ipjyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}
const db = mongoose.connection;
db.once('open', function() {
    console.log(`we're connected!`);
  });


module.exports = main;