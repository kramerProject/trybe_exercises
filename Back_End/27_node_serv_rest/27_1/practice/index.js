const express = require('express');
const app = require('express')();
const { UserRouter } = require('./routes');

app.use(express.json())

app.use('/', UserRouter);


app.listen(3000, () => console.log('Listening'));