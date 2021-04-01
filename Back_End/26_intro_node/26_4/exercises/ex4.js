const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const middleWare = function (req, res, next) {
  const { age } = req.body;
  console.log(age + 2)
  if(parseInt(age) < 17 || age === "") {
    res.status(401).send({
      message: "unauthorized"
    })
  }
  next();
}

app.use(middleWare);

app.post('/hello2', (req, res) => {
  const { name } = req.body;

  res.status(200).send({
    message: `Hello, ${name}`
  })
})

app.listen(3000, () => console.log('listening'));