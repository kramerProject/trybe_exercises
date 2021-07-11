const express = require('express');


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

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))