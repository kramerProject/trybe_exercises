const assert = require('assert')

const greetPeople = (people) => {
  let greeting = '';
  let arrayOfgreetings = []

  for (const person in people) {
    greeting = `Hello ${people[person]}`;
    arrayOfgreetings.push(greeting)
  }
  return arrayOfgreetings;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const actual = greetPeople(parameter)

assert.strictEqual(typeof(greetPeople), 'function' )
assert.deepStrictEqual(actual, result)