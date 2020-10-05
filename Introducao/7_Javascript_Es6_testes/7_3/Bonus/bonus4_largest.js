const assert = require('assert')
const getLargestNumber = (array) => {
  let largestNumber = 0
  for (let i = 0; i < array.length; i += 1) {
      if (array[i] > largestNumber) {
          largestNumber = array[i];
      }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const output = getLargestNumber([45, 8, 2, 50, 1, 7, 99])

assert.strictEqual(output, result)


