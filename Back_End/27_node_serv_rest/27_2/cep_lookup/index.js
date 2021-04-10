const express = require('express');
const app = require('express')();

const PORT = 3000

const CepController = require('./controllers/CepController');

app.use(express.json());

app.use('/', CepController)

app.listen(PORT, () => console.log('Listening'))