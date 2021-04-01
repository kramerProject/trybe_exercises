const mathOperations = async (x, y, z) => {

  await setTimeout(() => {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
      console.log('digite apenas números')
    }
    const sum = x + y;
    const mul = sum * z;
    mul < 50 ? console.log('valor muito baixo') : console.log(mul);
  }, 1000)
  

};

mathOperations(1, 2, 30)