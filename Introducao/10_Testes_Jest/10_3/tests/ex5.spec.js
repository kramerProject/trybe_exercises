const { firstLetter } = require('../ex5')
const ex5 = require('../ex5')


test('upperString function', () => {
  const first = jest
    .spyOn(ex5, 'upperString')
    .mockImplementation((a) => a.toLowerCase())

  first('K')
  expect(first('K')).toBe('k')

  first.mockReset()
  first('R')

  expect(first).toHaveBeenCalledTimes(1)
  expect(first('K')).toBe(undefined)
  
})