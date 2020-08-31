function square(number) {

let caracter = "*"
let side = caracter.repeat(number)

if (number > 1) {
  for (counter = 1 ; counter <= number ; counter += 1) {
    console.log(side)
  }
}
}
(square(5))
