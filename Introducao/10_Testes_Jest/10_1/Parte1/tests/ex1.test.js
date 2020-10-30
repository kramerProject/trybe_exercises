

const sum = require('../ex1')

describe('testing sum function', () => {
  it('test if the sum of 4, 5 is 9', () => {
    expect(sum(4,5)).toEqual(9)
  })
  it('test if the sum of zeros is 0', () => {
    expect(sum(0,0)).toBe(0)
  })
  it('refactor', () => {
    expect(() => sum(4,'5')).toThrow()
  })
  it('expect to throw error', () => {
    expect(() => sum(4,'5')).toThrow(/parameters must be numbers/)
  })
})
