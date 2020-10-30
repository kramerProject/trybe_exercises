// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const stringNumber = [...`${n}`]
  let reverseInt = ''

  for (let index = stringNumber.length - 1; index >= 0; index -= 1) {
    reverseInt += stringNumber[index]
  }
  
  if (n < 0) {
    return parseInt(reverseInt) * (-1)
  } 
  return parseInt(reverseInt)
}

module.exports = reverseInt;