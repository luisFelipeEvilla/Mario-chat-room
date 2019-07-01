// Socket connection
var socket = io('http://localhost:3000');

// Query DOM
var $message = document.getElementById('message');
var $handle = document.getElementById('handle');
var $btn = document.getElementById('send');
var $output = document.getElementById('output');

// Emit events

$btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: $message.value,
        handle: $handle.value
    })
});

// Listen events

socket.on('chat', function (data) {
    $output.innerHTML += '<p><strong>' + data.handle +'</strong>: ' + data.message + '</p>'; 
});