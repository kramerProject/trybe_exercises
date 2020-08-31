function piramyd(number) {
  let caracter = "*"
  let spaces = " "
  let repeated = number - 3
  let numberIsEven = ((number % 2) == 0 && number > 1)
  let numberIsOdd = ((number % 2) !== 0 && number > 1)


  if (numberIsEven) {
    for (counter = 0 ; counter <= number ; counter +=2) {
        let side = spaces.repeat(repeated) + caracter.repeat(counter)
        console.log(side)
        repeated -= 1
      }
  } else if (numberIsOdd) {
    for (counter = 1 ; counter <= number ; counter +=2) {
      let side = spaces.repeat(repeated) + caracter.repeat(counter)
      console.log(side)
      repeated -= 1
    }
  }
}
piramyd(10)