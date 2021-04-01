const fs = require('fs').promises;
const path = require('path')


const writeContent = async (content) => {
 fs.writeFile(
   path.resolve(__dirname, '../data', 'simpsons.json'),
   JSON.stringify(content),
   (err) => {
    if (err) throw err;
   }
)};

module.exports = writeContent