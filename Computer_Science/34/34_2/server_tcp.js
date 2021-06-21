const net = require('net');

const server = net.createServer((c) => {
  // 'connection' listener.
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('olá cliente');
  c.pipe(c);

  c.on('data', (dt) => {
    console.log('data', dt.toString())   
  })
 
});


server.on('error', (err) => {
  throw err;
});

const PORT = 8085
server.listen(PORT, () => {
  console.log('server bound');
});