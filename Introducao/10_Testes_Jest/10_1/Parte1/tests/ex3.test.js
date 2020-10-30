const myRemoveWithoutCopy = require('../ex3')

describe('remove number without copy', () => {
  it('remove number 3', () => {
    const array = [1, 2, 3, 4]
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4])
  })
  it('remove number 3 not equal', () => {
    const array = [1, 2, 3, 4]
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4])
  })
  it('remove number 3 not equal', () => {
    const array = [1, 2, 3, 4]
    myRemoveWithoutCopy(array, 3)
    expect(array).toEqual([1, 2, 4])
  })
  it('remove number 3 not equal', () => {
    const array = [1, 2, 3, 4]
    expect(myRemoveWithoutCopy(array, 5)).toEqual([1, 2, 3, 4])
  })
})