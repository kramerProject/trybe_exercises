const ex4 = require('../ex4')
jest.mock('../ex4')

test('upperString function', () => {

  ex4.upperString.mockImplementation((a) => a.toLowerCase())

  ex4.upperString('K')
  expect(ex4.upperString('K')).toBe('k')
})

test('first Letter', () => {

  ex4.firstLetter.mockImplementation((a) => a[a.length - 1])

  ex4.firstLetter('Kramer')
  expect(ex4.firstLetter('Kramer')).toBe('r')
})

test('concatenate', () => {

  ex4.concStrings.mockImplementation((a, b, c) => a + b + c)

  ex4.concStrings('K', 'r', 'a')
  expect(ex4.concStrings('K', 'r', 'a')).toBe('Kra')
})