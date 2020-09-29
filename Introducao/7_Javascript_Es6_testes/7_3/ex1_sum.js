const assert = require('assert');


function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}


// implemente seus testes aqui
// Teste 1
const expected = sum(4, 5)
assert.strictEqual(expected, 9, '4 + 5 is equal nine')

// Teste 2
const expected2 = sum(0, 0)
assert.strictEqual(expected2, 0, '0 + 0 is equal zero')

// Teste 3
try {
  sum(4, '5')
} catch (error) {
  console.log(`${error} deu erro`)
}

// Teste 4
assert.throws(() => {sum(4, '5'); }, /^Error: parameters must be numbers$/);


