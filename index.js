const express = require('express');
const socket = require('socket.io');
const debug = require('debug')('chat-room:express');
const chalk = require('chalk');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
const server = app.listen(PORT, () => {
    console.log(`Server listenning on PORT ${PORT}`)
})

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server)

io.on('connection', (socket) => {
    debug(`Has been stablished a connection to a socket with ID: ${chalk.green(socket.id)}`)

    socket.on('chat', (data) => {
        debug('a message has arrived');
        io.sockets.emit('chat', data)
    })
})
