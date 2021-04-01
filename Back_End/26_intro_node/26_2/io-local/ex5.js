const fs = require('fs')
const string = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

async function saveFiles(text, index) {
  await fs.writeFile(`./file${index}.txt`, text, (e) => {
    console.log('salvo')
  })
}

string.forEach((text, index) => {
  saveFiles(text, index)
});

function readFile(fileName) {

  const promise = new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      err ? reject(err) : resolve(content)
    })
  })
  return promise;
}

Promise.all([
  readFile('file0.txt'),
  readFile('file1.txt'),
  readFile('file2.txt'),
  readFile('file3.txt'),
  readFile('file4.txt')
])
.then(([file0, file1, file2, file3, file4]) => {
  console.log(`${file0} - ${file1} - ${file2} - ${file3} - ${file4}`)
})
.catch((err) => {
  console.error(`Erro ao ler arquivos: ${err.message}`);
})