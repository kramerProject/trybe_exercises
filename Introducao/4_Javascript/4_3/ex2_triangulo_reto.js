function straightTriangle(number) {
  let caracter = "*"

  if (number > 1) {
    for (let counter = 1 ; counter <= number ; counter += 1) {
      let side = caracter.repeat(counter)
      console.log(side)
    }
  }
}
straightTriangle(5)