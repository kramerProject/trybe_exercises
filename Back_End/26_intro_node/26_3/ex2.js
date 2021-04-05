const fs = require('fs');

async function readContent(fileName) {
  let timeFile1 = 0
  const startFile1 = Date.now(); 
  const content = await fs.readFile(`${__dirname}/${fileName}`, (err, file) => {
    timeFile1 = Date.now() - startFile1;
    console.log(`${fileName} possui ${file.byteLength} bytes e foi processado em ${timeFile1} milisegundos`)
  });
  
}

readContent('simpsons.json')
readContent('teste.pdf')
readContent('arquivo.txt')



