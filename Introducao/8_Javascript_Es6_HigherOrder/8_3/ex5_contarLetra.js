    
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

  arrayOfA = []
  const finalResult = arrayOfLetter.forEach((letters) => {
    letters.forEach((letter) => {
      if (letter === 'A' || letter === 'a') {
        arrayOfA.push(letter)
      }
    })
  })
    
  return arrayOfA.length
}

console.log(containsA())
assert.deepStrictEqual(containsA(), 20);

