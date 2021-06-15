module.exports = (io) => io.on('connection', (socket) => {
  let likes = 0
  let stars = 0
  socket.on('likePost', (message) => {
    console.log(`Mensagem ${message}`);
    io.emit('updateLikes', likes += 1);
  });

  socket.on('starPost', (message) => {
    console.log(`Mensagem ${message}`);
    socket.broadcast.emit('updateStars', stars += 1);
  });

  // socket.on('starPost', (message) => {
  //   console.log(`Mensagem ${message}`);
  //   io.emit('updateLikes', likes += 1);
  // });

  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `Xiii! ${socket.id} acabou de se desconectar! :(`);
  });
});