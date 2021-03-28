const readlineSync = require('readline-sync');


function sorteio() {
  const randomNumber = Math.floor(Math.random() * (10 - 0)) + 0;
  console.log('random number', randomNumber)
  const guess = parseInt(readlineSync.questionFloat('What is your guess? ').toFixed(0));
  

  console.log('tipo random: %s guess: %s', typeof(randomNumber), typeof(guess))

  if (randomNumber === guess) {
    console.log("parabéns vc acertou")

  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`)
  }

  const playagain = readlineSync.question('Wanna play again s / n? ');
  if( playagain === 's') {
    sorteio()
  }
}

sorteio();