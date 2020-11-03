let randomNumber = require('../ex1')



test('testing random number', () => {
  randomNumber = jest
    .fn()
    .mockReturnValue(10)
  randomNumber()

  expect(randomNumber).toHaveBeenCalled()
  expect(randomNumber()).toBe(10)
  expect(randomNumber).toHaveBeenCalledTimes(2)
})