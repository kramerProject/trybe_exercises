const assert = require('assert');
// escreva a função addAllnumbers aqui
const addAllnumbers = (numbers) => {
  let sum = 0
  for (let index = 0; index < numbers.length; index += 1) {
    let number = numbers[index]
    sum += number
  }
  return sum
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);