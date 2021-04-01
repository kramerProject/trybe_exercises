const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.send(`Hello ${name} voce tem ${age} anos`)
})

app.listen(3000);