let numbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

let roman = "MXCIV"

function convertRoman(roman, numbers) {
  let convertedNumber = []
  let result = 0
  let outPut = 0
  let postNumber = 0

  /*Converting each roman algarism into its correspondent from numbers objects and putting on an array */
  for (let counter = 0 ; counter <= roman.length ; counter+=1) {
    let currentCheck = roman[counter]
    for (let item in numbers) {
      if (currentCheck == item) {
        convertedNumber.push(numbers[item])
      }
    }
  }

  counter = 0
  for (counter = 0 ; counter <= convertedNumber.length - 1 ; counter +=1 ) {
    let currentNumber = convertedNumber[counter]
    if (counter == convertedNumber.length - 1) {
      postNumber = 0
    } else {
      postNumber = convertedNumber[counter+1]
    }
    if (currentNumber < postNumber) {
      outPut = postNumber - currentNumber
      counter += 1
      result += outPut
    } else {
      outPut = currentNumber
      result += outPut
    }
  }
  console.log(result)
}
convertRoman(roman, numbers)