const mathOperations = async (x, y, z) => {
  if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
    return Promise.reject(new Error('Digite apenas números'));
  }
  const sum = x + y;
  const mul = sum * z;
  return mul < 50 ? Promise.reject(new Error('Valor muito baixo')) : mul;
};

mathOperations(1, 2, 26)
  .then(resultado => console.log(resultado))