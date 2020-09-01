
function palindromo(text) {
  let textSize = text.length
  let reversedText = ""
  /* Getting the text backwards */
  for (counter = textSize - 1 ; counter >= 0 ; counter -=1 ) {
    reversedText += text[counter]
  }
  /* Compare if text and reversedtext are equal */
  if (reversedText === text) {
    console.log(`O texto ${text} é um palindromo.`)
  } else {
    console.log(`O texto ${text} não é um palindromo.`)
  }
}
palindromo("arara")

