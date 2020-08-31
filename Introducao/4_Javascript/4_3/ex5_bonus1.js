function emptyPyramid(number) {
  let caracter = "*"
  let spaces = " "
  let repeated = (number - 1)/2
  let midspace = 1

    for (let counter = 1 ; counter <= number ; counter += 2) {
      if (counter == 1) {
        let side = spaces.repeat(repeated) + caracter.repeat(1) + spaces.repeat(repeated)
        console.log(side)
        repeated -= 1
      } else if (counter == number) {
      side = caracter.repeat(number)
      console.log(side)
    } else {
      side = spaces.repeat(repeated) + caracter.repeat(1) + spaces.repeat(midspace) + caracter.repeat(1)
      console.log(side)
      midspace +=2
      repeated -= 1
    }
  }                                                    
}
emptyPyramid(13)