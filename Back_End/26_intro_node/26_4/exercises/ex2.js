const express = require('express')
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.send({
    message: "pong"
  })
})

app.listen(3000, () => console.log('listening'));