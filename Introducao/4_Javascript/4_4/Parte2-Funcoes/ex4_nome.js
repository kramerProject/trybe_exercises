let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function greatestName(names) {
  let numberOfLetters = 0
  let greatestName = ""
 

  for (counter = 0 ; counter < names.length ; counter +=1 ) {
    let currentName = names[counter]
    let currentNumberOfLetters = currentName.length
    if (counter == 0) {
      greatestName = currentName
      numberOfLetters = currentNumberOfLetters
    } else {
      if (currentNumberOfLetters > numberOfLetters) {
        greatestName = currentName
        numberOfLetters = currentNumberOfLetters
      }
    }
  }
  message = `O maior nome ${greatestName} possui ${numberOfLetters} letras.`
  console.log(message)
}
greatestName(names)