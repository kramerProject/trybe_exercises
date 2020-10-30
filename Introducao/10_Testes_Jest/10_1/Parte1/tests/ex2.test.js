const myRemove = require('../ex2')

describe('tests if anumber is removed from array', () => {
  it('Number is removed from array', () => {
    const array = [1, 2, 3, 4]
    expect(myRemove(array, 3)).toEqual([1, 2, 4])
  })
  it('After removed does not return initial array', () => {
    const array = [1, 2, 3, 4]
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4])
  })
  it('After the function is called, original array does not change', () => {
    const array = [1, 2, 3, 4]
    myRemove(array, 3)
    expect(array).toEqual([1, 2, 3, 4])
  })
  it('Copy is equal initial array', () => {
    const array = [1, 2, 3, 4]
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4])
  })
})