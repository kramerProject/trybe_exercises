let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let currentNumber = 0
let greatestNumber = 0
let greatestCheck = 0


for (j = 0 ; j < numbers.length ; j+=1){
  currentNumber = numbers[j]
  
  for (i = greatestCheck ; i < numbers.length ; i += 1) {
    if (i == greatestCheck) {
      greatestNumber = numbers[i]
    } else {
      if (numbers[i] > greatestNumber) {
        greatestNumber = numbers[i]
      }
    }
  }
  if (greatestNumber > currentNumber) {
    position = numbers.indexOf(greatestNumber)
    numbers[j] = greatestNumber
    numbers[position] = currentNumber
  }
greatestCheck+=1
}

console.log(numbers)