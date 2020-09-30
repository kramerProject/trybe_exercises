const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
// teste 1
const expected1 = myRemoveWithoutCopy([1, 2, 3, 4], 3)
assert.deepStrictEqual(expected1, [1, 2, 4], 'objects must be the same')

// teste 2
const expected2 = myRemoveWithoutCopy([1, 2, 3, 4], 3)
assert.notDeepStrictEqual(expected2, [1, 2, 3, 4])

// teste 3
const expected3 = myRemoveWithoutCopy([1, 2, 3, 4], 3)
expected3.splice(2, 0, 3)
assert.deepStrictEqual(expected3, [1, 2, 3, 4], 'objects must be the same')

// teste 4
const expected4 = myRemoveWithoutCopy([1, 2, 3, 4], 5)
assert.deepStrictEqual(expected4, [1, 2, 3, 4], 'objects must be the same')

