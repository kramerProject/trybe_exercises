const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

socket.on('message', (message) => {
  console.log(message.toString());
});

const PORT = 8084;

socket.bind(PORT);

console.log(`Server UDP ativo!\nEscutando na porta: ${PORT}`);