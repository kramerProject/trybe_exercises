let numbers = [2, 3, 6, 7, 10, 1]

function greatestItem(numbers) {
  let greatest = 0
  let indice = 0
  for (let counter = 0 ; counter <= numbers.length ; counter +=1 ) {
    if (counter == 0) {
      greatest = numbers[counter]
      indice = counter
    } else {
      if (numbers[counter] > greatest ) {
        greatest = numbers[counter]
        indice = counter
      }
    }
  }
  let message = `O maior valor ${greatest} está na posição ${indice}.`
  console.log(message)
}
greatestItem(numbers)