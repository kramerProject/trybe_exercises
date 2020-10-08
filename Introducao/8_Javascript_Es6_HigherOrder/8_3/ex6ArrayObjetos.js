    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  // escreva seu código aqui
  const finalObject = alunos.map((aluno, index) => {
    const grades = notas[index].reduce((result, nota) => {
      return result += nota
    })
    return {
      name: aluno,
      notas: grades / notas[index].length,
    }
  })
  return finalObject
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage())
assert.deepStrictEqual(studentAverage(), expected);