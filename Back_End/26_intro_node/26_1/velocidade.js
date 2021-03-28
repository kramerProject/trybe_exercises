const readlineSync = require('readline-sync');


function avgSpeed() {
  const distance = readlineSync.question('Qual a distancia? ');
  const time = readlineSync.question('Qual o tempo? ');

  avg = distance / time
  console.log('avg speed is %s', avg)
}

avgSpeed();