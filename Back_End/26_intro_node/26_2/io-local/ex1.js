const mathOperations = (x, y, z) => {

  const promise = new Promise((resolve, reject) => {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
      reject(new Error('Digite apenas números'));
    }

    const sum = x + y;
    const mul = sum * z;
    mul < 50 ? reject(new Error('Valor muito baixo')) : resolve(mul);
  })
  
  return promise;
  
};

mathOperations(1, 2, 'ksksk')
  .then(resultado => console.log(resultado))
  .catch(e => console.log(e.message))