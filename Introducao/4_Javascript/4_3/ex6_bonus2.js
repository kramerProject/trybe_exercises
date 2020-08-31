function primo(number) {
  let numberDivisor = []

  for (counter = 2 ; counter < number ; counter += 1) {
    if (number % counter == 0) {
      numberDivisor.push(counter)
    }
  }
  if (numberDivisor.length == 0) {
    console.log(`O número ${number} é primo`)
  }
}
primo(6)