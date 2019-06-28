const mongoose = require('mongoose')
const config = require('../config.js');
// debugger
const db = mongoose.connect(config.mongo.url, { useNewUrlParser: true })

// db.on('error', function(err){
//   // debugger
//     console.error("connection error;", error);
// });

// db.once('open', callback = () => {
//   // debugger
//   console.log('Mongo ' + config.mongo.url + ' connected!');
// });
mongoose.Promise = global.Promise;
module.exports = mongoose;