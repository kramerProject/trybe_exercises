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

const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);
const num3 = Math.floor(Math.random() * 100);

mathOperations(num1, num2, num3)
  .then(resultado => console.log(resultado))
  .catch(e => console.log(e.message))