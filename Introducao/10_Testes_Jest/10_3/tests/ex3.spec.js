let randomNumber = require('../ex3')

test('testing random number implementation', () => {
  randomNumber = jest
    .fn()
    .mockImplementation((a, b, c) => a * b * c)

  randomNumber(2,3,4)

  expect(randomNumber).toHaveBeenCalled()
  expect(randomNumber(2,3,4)).toBe(24)
  expect(randomNumber).toHaveBeenCalledTimes(2)

  randomNumber.mockReset()

  randomNumber.mockImplementation((a) => a * 2)

  randomNumber(3)
  expect(randomNumber(3)).toBe(6)
  expect(randomNumber).toHaveBeenCalledTimes(2)

})