// nao entendi como a callback retorna o valor correto sem ter sido definida
const uppercase = (str, callback) => {
  const result = str.toUpperCase();
  callback(result);
}

test('Testando SumNumbers, soma 5 mais 10', done => {
  uppercase('a', (result) => {
    expect(result).toBe('A');
    done();
  });
})