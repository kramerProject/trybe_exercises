const fs = require('fs').promises;
const path = require('path')


const readContent = async () => {
 const content =  await fs.readFile(path.resolve(__dirname, '../data', 'simpsons.json'));
 return JSON.parse(content.toString('utf-8'));
}


module.exports = readContent;