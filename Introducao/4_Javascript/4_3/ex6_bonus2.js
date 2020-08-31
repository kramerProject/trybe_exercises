function primo(number) {
  let numberDivisor = []

  for (counter = 2 ; counter < number ; counter += 1) {
    if (number % counter == 0 && number > 1) {
      numberDivisor.push(counter)
    }
  }
  if (numberDivisor.length == 0 && number > 1) {
    console.log(`O número ${number} é primo`)
  } else {
    console.log(`O número ${number} não é primo`)
  }
}
primo(5)