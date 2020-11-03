const { TestScheduler } = require("jest");

let somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
let subtrair = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => a / b;


test('subtrair', () => {
  subtrair = jest
  .fn()
  .mockReturnValue(5)

  subtrair()
  expect(subtrair).toHaveBeenCalled()
})

test('multiplica', () => {
  multiply = jest
    .fn()
    .mockReturnValue(10)

  multiply()
  expect(multiply).toHaveBeenCalled()
  expect(multiply()).toBe(10)
})

test('somar', () => {
  somar = jest
    .fn()
    .mockImplementation((a, b) => a + b);
  somar(3,2)

  expect(somar).toHaveBeenCalled()
  expect(somar(3,2)).toBe(5)
  expect(somar).toHaveBeenCalledWith(3,2)
})

test('divide', () => {
  dividir = jest
    .fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5)
  dividir()

  expect(dividir).toHaveBeenCalled()
  expect(dividir()).toBe(5)
  expect(dividir()).toBe(15)
  expect(dividir()).toBe(15)
  expect(dividir).toHaveBeenCalledTimes(4)
})

test('subtraindo novamente', () => {
  subtrair = jest
    .fn()
    .mockReturnValue(20)
    .mockImplementation((a, b) => a - b)
  
  subtrair()

  expect(subtrair).toHaveBeenCalled()
  expect(subtrair).toHaveBeenCalledTimes(1)
  expect(subtrair(10,5)).toBe(5)

  subtrair.mockReset()

  expect(subtrair(10,5)).toBe(undefined)
  expect(subtrair).toHaveBeenCalledTimes(1)
  expect(subtrair).toHaveBeenLastCalledWith(10,5)
})