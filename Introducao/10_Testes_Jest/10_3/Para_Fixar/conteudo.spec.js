let randomNumber = () => Math.floor(Math.random() * 100)

let isDivisible = (number) => (randomNumber() % number) === 0


describe('check if random number have been called', () => {
  it('function random number have been called', () => {
    randomNumber = jest
      .fn()
      .mockReturnValue(1)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3)

    expect(isDivisible(2)).toBe(true)
    expect(isDivisible(2)).toBe(false)
    expect(isDivisible(2)).toBe(false)
  })
})