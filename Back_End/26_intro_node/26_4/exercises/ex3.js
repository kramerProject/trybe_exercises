const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).send({
    message: `Hello, ${name}`
  })
})

app.listen(3000, () => console.log('listening'));