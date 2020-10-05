const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// teste 1
const expected1 = myFizzBuzz(15)
assert.strictEqual(expected1, 'fizzbuzz', 'must be equal fizzbuzz')

// teste 2
const expected2 = myFizzBuzz(9)
assert.strictEqual(expected2, 'fizz', 'must be equal fizz')

// teste 3
const expected3 = myFizzBuzz(10)
assert.strictEqual(expected3, 'buzz', 'must be equal buzz')

// teste 4
const expected4 = myFizzBuzz(11)
assert.strictEqual(expected4, 11, 'must be equal 11')

// teste 5
const expected5 = myFizzBuzz('string')
assert.strictEqual(expected5, false, 'must be equal false')
