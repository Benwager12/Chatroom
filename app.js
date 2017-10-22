var express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(81);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection', function(socket) {
    socket.on('send message', function(data) {
        io.sockets.emit('new message', data);
    });

    socket.on('person joined', function(data) {
        io.sockets.emit('person joined', data);
    });

    socket.on('name change', function(data) {
        io.sockets.emit('name change', data);
    });

    socket.on('send image', function(data) {
        io.sockets.emit('send image', data);
    })
});
