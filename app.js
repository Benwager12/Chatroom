var express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(81);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/admin', function(req, res) {
    res.sendFile(__dirname + '/admin.html')
});

io.sockets.on('connection', function(socket) {
    socket.on('send message', function(data) {
        io.sockets.emit('new message', data);
        console.log(data);
    });

    socket.on('person joined', function(data) {
        io.sockets.emit('person joined', data);
        console.log(data);
    });

    socket.on('name change', function(data) {
        io.sockets.emit('name change', data);
        console.log(data);
    });

    socket.on('send image', function(data) {
        io.sockets.emit('send image', data);
        console.log(data);
    })

    socket.on('admin message', function(data) {
        io.sockets.emit('admin message', data);
        console.log("Admin message: " + data);
    });

    socket.on('set messages', function(data) {
        io.sockets.emit('set messages', data);
        console.log("Messages set to: " + data);
    });
});
