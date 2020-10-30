const assert = require('assert');
const { timeStamp } = require('console');
const { hasUncaughtExceptionCaptureCallback } = require('process');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

test('objects are equal', () => {
  expect(obj1).toMatchObject(obj2)
})
test('objects are equal', () => {
  expect(obj2).not.toMatchObject(obj3)
})
// implemente seus testes aqui