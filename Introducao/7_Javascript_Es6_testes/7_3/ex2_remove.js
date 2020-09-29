const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// teste 1
const expected1 = myRemove([1, 2, 3, 4], 3)
assert.deepStrictEqual(expected1, [1, 2, 4], 'Objects are the same')

// teste2
const expected2 = myRemove([1, 2, 3, 4], 3)
assert.notDeepStrictEqual(expected2, [1, 2, 3, 4], 'objects must be different')

// teste 3
const expected3 = myRemove([1, 2, 3, 4], 3)
expected3.splice(2, 0, 3)
assert.strictEqual(expected3, [1, 2, 3, 4], 'must be equal')


// teste 4
const expected4 = myRemove([1, 2, 3, 4], 5)
assert.deepStrictEqual(expected4, [1, 2, 3, 4])

