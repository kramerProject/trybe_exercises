    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  arrayOfLetter = []
  const checkLetterA = names.forEach((name) => arrayOfLetter.push(name.split('')))
  
  const quantityOfA = arrayOfLetter.reduce((letters, letter) => {
    letter.map((element) => {
      if (element === 'a' || element === 'A') {
        letters += 1
      }
    })
    return letters
  }, 0)
  return quantityOfA
}

assert.deepStrictEqual(containsA(), 20);

