let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let currentNumber = 0
let smallestNumber = 0
let smallestCheck = 0


for (j = 0 ; j < numbers.length ; j+=1){
  currentNumber = numbers[j]
  
  for (i = smallestCheck ; i < numbers.length ; i += 1) {
    if (i == smallestCheck) {
      smallestNumber = numbers[i]
    } else {
      if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i]
      }
    }
  }
  if (smallestNumber < currentNumber) {
    position = numbers.indexOf(smallestNumber)
    numbers[j] = smallestNumber
    numbers[position] = currentNumber
  }
smallestCheck+=1
}

console.log(numbers)
