var mongoose = require('mongoose');

//this connects us to our database
var connectionString = process.env.DB;


console.log('Attempting to connect to Mongo');
mongoose.connect(connectionString);//connect to the db
//supplied in the connectionString

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: ' + process.env.DB);
});

mongoose.connection.on('error',function (error) {
  console.log('Mongoose connection error: ' + error);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected!');
});


//listen for the 'error' and 'disconnected' events
//log out smth when either occurs
//then kill your server
//which event fired?
//restrt your server
//then go find the terminal tab running sudo mongod
//kill it
//which event fired?
//when done.. restart sudo mongod and get ready
//for block #2
