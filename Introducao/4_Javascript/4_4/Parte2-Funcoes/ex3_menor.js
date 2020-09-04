let numbers = [2, 4, 6, 7, 10, 0, -3]

function smallestItem(params) {
  let smallest = 0
  let indice = 0
  for (counter = 0 ; counter <= numbers.length ; counter +=1 ) {
    let currentNumber = numbers[counter]
    let currentIndex = counter
    if (counter == 0) {
      smallest = currentNumber
      indice = currentIndex
    } else {
      if (currentNumber < smallest) {
        smallest = currentNumber
        indice = currentIndex
      }
    }
  }
  let message = `O menor valor ${smallest} está na posição ${indice}.`
  console.log(message)
}

smallestItem(numbers)