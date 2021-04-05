const fs = require('fs');


async function getLength(fileName) {
  const content = await fs.readFile(`${__dirname}/${fileName}`, (err, file) => {
    if(err) throw new Error(err)
    console.log(file.byteLength)
    return file.byteLength
  })

  console.log('size', content)
  return content
}

async function readThemAll() {
  let byteSum = 0
  const startTime = Date.now()
  const directory = fs.readdirSync(`${__dirname}`, (err, files) => {
    if(err) throw new Error(err)
    return files;
  })
  console.log(directory)
  await directory.forEach(file => {
    byteSum += getLength(file)
  })

  console.log('bytsum', byteSum)
  // const timeScript = Date.now() - startTime;

  // return `Este diretorio contem ${directory.length} arquivos. Tamanho: ${byteSum}. Tempo de execução ${timeScript} milisegundos`
  // return `Este diretorio contem ${directory.length}`
}

readThemAll()