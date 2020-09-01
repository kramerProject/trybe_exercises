let numbers = [2, 3, 2, 5, 8, 2, 3];

function repeatNumber(numbers) {
  let mostRepeatedNumber = 0
  let numberOfTimes = 0

  for (counter = 0 ; counter < numbers.length - 1 ; counter += 1 ) {
    let currentNumber = numbers[counter]
    let numberOfTimesCheck = 0
    for (counterCheck = 0 ; counterCheck < numbers.length - 1 ; counterCheck += 1) {
      let checkedNumber = numbers[counterCheck]
      if (currentNumber == checkedNumber) {
        numberOfTimesCheck += 1
      }
    if (numberOfTimesCheck > numberOfTimes) {
      mostRepeatedNumber = currentNumber
      numberOfTimes = numberOfTimesCheck
    }  
    }
  }
  message = `The most repeated number is ${mostRepeatedNumber}, appearing ${numberOfTimes} times.`
  console.log(message)
}
repeatNumber(numbers)