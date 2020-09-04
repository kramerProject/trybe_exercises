function stringEndingCheck(stringWord, stringEnding) {
  let numberOfMatchedLetter = 0
  let indexStringWord = stringWord.length - 1

  for (let counter = stringEnding.length - 1 ; counter >= 0 ; counter -= 1) {
    let letterCheckStringEnd = stringEnding[counter]
    let letterCheckStringWord = stringWord[indexStringWord]
    if (letterCheckStringEnd == letterCheckStringWord) {
      numberOfMatchedLetter +=1
    }
    indexStringWord -=1
  }
  if (numberOfMatchedLetter == stringEnding.length) {
    return true
  } else {
    return false
  }
}
console.log(stringEndingCheck("trybe", "be"))