const fs = require('fs');


function readContent(fileName) {
  const startFile1 = Date.now(); 
  const content = fs.readFileSync(`${__dirname}/${fileName}`);
  const timeFile1 = Date.now() - startFile1;

  return `${fileName} possui ${content.byteLength} bytes e foi processado em ${timeFile1} milisegundos`

}

console.log(readContent('simpsons.json'))
console.log(readContent('arquivo.txt'))
console.log(readContent('teste.pdf'))

