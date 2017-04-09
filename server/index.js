var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
 console.log(req);
});

io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('requestId');
});

io.on("requestId", function(socket){
    
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});