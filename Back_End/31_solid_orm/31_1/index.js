
const express = require('express');


const routes = require('./src/routes');

const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});