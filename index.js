var express = require('express');
const PORT = process.env.PORT || 3000;
var socket = require('socket.io');
const path = require('path')

//App Setup
var app = express();

//Setup server
var server = app.listen(PORT,()=>{
  console.log(`Web server is up and running on port ${PORT}!`)
})


//Static files
// app.use(express.static('public'));
app.use('/', express.static(path.join(__dirname, '/public')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))

//Socket setup
var io = socket(server);

io.on('connection',function(socket){
  console.log(`a user connected`,socket.id);
});