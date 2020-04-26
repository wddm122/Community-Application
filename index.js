var express = require('express');
const PORT = process.env.PORT || 3000;
var socket = require('socket.io');
const path = require('path')

//App Setup
var app = express();

//Setup server
var server = app.listen(PORT,function(){
  console.log(`Web server is up and running on port ${PORT}!`)
})


//Static files
// app.use(express.static('public'));
app.use('/', express.static(path.join(__dirname, '/public')));
app.get('/index', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/room1', (req, res) => res.sendFile(path.join(__dirname, '/public/room1.html')));
app.get('/room2', (req, res) => res.sendFile(path.join(__dirname, '/public/room2.html')));
app.get('/room3', (req, res) => res.sendFile(path.join(__dirname, '/public/room3.html')));




//Socket setup
var io = socket(server);

io.on('connection',function(socket){
  console.log(`a user connected`,socket.id);

    // Handle chat event
    socket.on('chat', function(data){
      // console.log(data);
      io.sockets.emit('chat', data);
  });

  // Handle typing event
  socket.on('typing', function(data){
      socket.broadcast.emit('typing', data);
  });

});