const readlineSync = require('readline-sync');


function executeScript() {
  const options = ["./imc.js", "./velocidade.js", "./sorteio.js"]
  const ask = readlineSync.keyInSelect(options, "Which script")
  console.log('ask', options[ask])
  console.log(`npm run ${options[ask]}`)

  require(`${options[ask]}`);
}

executeScript()