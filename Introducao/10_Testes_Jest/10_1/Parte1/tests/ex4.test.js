const myFizzBuzz = require('../ex4')
console.log(myFizzBuzz(5))

describe('test fizzBuzz function', () => {
  it('divisivel por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
  it('divisivel por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  })
  it('divisivel por 5', () => {
    expect(myFizzBuzz(20)).toBe('buzz')
  })
})