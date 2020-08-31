function invertedTriangle(number) {
  let caracter = "*"
  let spaces = " "

  if (number > 1) {
    for (let counter = 1 ; counter <= number ; counter += 1) {
      side = spaces.repeat(number - counter) + caracter.repeat(counter)
      console.log(side)
    }
  }
}
invertedTriangle(7)