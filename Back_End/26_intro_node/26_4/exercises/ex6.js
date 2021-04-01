const express = require('express');
const app = express();
const simpsons = require(`${__dirname}/data/simpsons.json`);

const rescue = require('express-rescue');

const middleWare = require('./middleWares');

const controllers = require('./controllers');

const fs = require('fs').promises;

app.use(express.json());

app.get('/simpsons', (req, res) => {
  if (simpsons) {
    res.status(200).json(simpsons)
  }
})

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const found = simpsons.find(item => item.id === id)
  console.log(found)
  if(found) {
    res.status(200).json(found)
  }
  return res.send([])
})

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;

  try {
    const oldSimpsons = await controllers.readContent();
    const found = oldSimpsons.find(item => item.id === id);

    if(found) res.status(400).json({
      message: "personagem já existe, tente usar outro id"
    })

    const newData = [...oldSimpsons, { id, name }]
    await controllers.writeContent(newData)
    return res.status(200).json(newData)

  } catch(error) {
    throw new Error(error)
  }
}))

// app.use(middleWare.ex6MiddleWare)

app.listen(3000, () => console.log('I am listening'));