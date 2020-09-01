function soma(number) {
  let addition = 0
  let message = ""
  for (counter = 1 ; counter <= number ; counter += 1) {
      addition += counter
      if (counter < number) {
        message += counter + "+"
      } else {
        message += counter + " ="
      }
  }
  console.log(message, addition)
}
soma(8)