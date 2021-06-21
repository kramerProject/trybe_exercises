const express = require('express');
const net = require('net');

const app = express()

app.use(express.json())

// curl http://localhost:3000/ex1
app.get('/ex1', (req, res) => {
  return res.send("Olá mundo")
})

// curl -d '{"userId": 1, "title": "titulo da tarefa", "completed": false}' -H 'Content-Type: application/json' http://localhost:3000/ex1
app.post('/ex1', (req, res) => {
  console.log('hey', req.body)
  console.log(req.headers)
  return res.json(req.body)

})

const server = net.createServer((c) => {
  // 'connection' listener.
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('olá cliente\r\n');
  c.pipe(c);

  c.on('data', (dt) => {
    console.log('data', dt.toString())   
  })
 
});


server.on('error', (err) => {
  throw err;
});
server.listen(8085, () => {
  console.log('server bound');
});

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))