    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  // para cada item de cada elemento retorna adiciona o item em um novo array
  const finalMatrix = arrays.reduce((result, item, index) => {
    item.map((element) => {
      result.push(element)
    })
    return result
  }, [])
  return finalMatrix
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);