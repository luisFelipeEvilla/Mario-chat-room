// Socket connection
var socket = io('http://localhost:3000');

// Query DOM
var $message = document.getElementById('message'),
    $handle = document.getElementById('handle'),
    $btn = document.getElementById('send'),
    $output = document.getElementById('output'),
    $feedback = document.getElementById('feedback');

// Emit events

$btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: $message.value,
        handle: $handle.value
    })
});

$message.addEventListener('keypress', function () {
    socket.emit('typing', handle.value)
})

// Listen events

socket.on('chat', function (data) {
    $feedback.innerHTML = "";
    $output.innerHTML += '<p><strong>' + data.handle +'</strong>: ' + data.message + '</p>'; 
});

socket.on('typing', function (handle) {
    $feedback.innerHTML = '<p><em>' + handle + ' is typing a message...</em></p>'
})