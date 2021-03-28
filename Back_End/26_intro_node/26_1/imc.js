const readline = require('readline-sync');

function calculaImc () {
  const peso = readline.questionFloat('Qual o seu peso (kg)? ').toFixed(2);
  const altura = readline.questionFloat('Qual sua altura (m)? ').toFixed(2);

  console.log('Peso: %s, altura: %s', peso, altura);

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log('imc', imc)

  if (imc < 18.5) {
    console.log('magreza');
  } else if (imc >= 18.5 && imc < 25) {
    console.log('normal');
  } else if (imc >= 25 && imc < 30) {
    console.log('sobre peso');
  } else if (imc >= 30 && imc < 35) {
    console.log('Obesidade grau I')
  } else if (imc >= 35 && imc < 40) {
    console.log('Obesidade grau II')
  }
}

calculaImc();