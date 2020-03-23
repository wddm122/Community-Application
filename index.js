var express = require('express');
const PORT = process.env.PORT || 3000;
var socket = require('socket.io');

//App Setup
var app = express();

//Setup server
var server = app.listen(PORT,()=>{
  console.log(`Web server is up and running on port ${PORT}!`)
})


//Static files
app.use(express.static('public'));


//Socket setup
var io = socket(server);

io.on('connection',function(socket){
  console.log(`a user connected`,socket.id);
});