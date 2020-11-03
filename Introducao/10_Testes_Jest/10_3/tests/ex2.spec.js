const { TestScheduler } = require('jest')
let randomNumber = require('../ex2')

test('testing random number implementation', () => {
  randomNumber = jest
    .fn()
    .mockImplementation((a,b) => a / b)
  
  randomNumber(10,5)

  expect(randomNumber).toHaveBeenCalled()
  expect(randomNumber(10,5)).toBe(2)
  expect(randomNumber).toHaveBeenCalledTimes(2)

  randomNumber.mockReset()
  expect(randomNumber(10,5)).toBe(undefined)
})