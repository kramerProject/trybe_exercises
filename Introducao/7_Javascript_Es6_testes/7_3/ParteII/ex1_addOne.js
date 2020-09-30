const addOne = (array) => {
  const newArray = []
  for (index = 0; index < array.length; array += 1) {
    let newNumber = array[index] + 1
    newArray.push(newNumber)
  }
  return newArray
}

console.log(typeof(addOne))

const assert = require('assert');
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);