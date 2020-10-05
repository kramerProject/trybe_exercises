const assert = require("assert");

const removeVowels = (word) => {
  const characters = word.split('');
  let counter = 0;
  let finalWord = '';

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      counter += 1;
      finalWord += counter;
    } else {
      finalWord += characters[i];
    }
  }
  return finalWord;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

const actual = removeVowels(parameter)
assert.deepStrictEqual(actual, result)

const parameter2 = 'Parabens'
const result2 = 'P1r2b3ns'

const actual2 = removeVowels(parameter2)
assert.deepStrictEqual(actual2, result2)




