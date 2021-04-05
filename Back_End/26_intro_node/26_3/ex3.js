const fs = require('fs');


function getLength(fileName) {
  const content = fs.readFileSync(`${__dirname}/${fileName}`)

  return content.byteLength;
}

function readThemAll() {
  let byteSum = 0
  const startTime = Date.now()
  const directory = fs.readdirSync(`${__dirname}`)

  directory.forEach(file => {
    byteSum += getLength(file)
  })

  const timeScript = Date.now() - startTime;

  return `Este diretorio contem ${directory.length} arquivos. Tamanho: ${byteSum}. Tempo de execução ${timeScript} milisegundos`

}

console.log(readThemAll())