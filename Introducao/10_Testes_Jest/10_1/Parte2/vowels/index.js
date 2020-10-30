// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let counter = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']

  vowels.forEach((vowel) => {
    for (let i = 0; i < str.length; i += 1) {
      if (vowel === str[i].toLowerCase()) {
        counter += 1
      }
    }
  })
  return counter
}

module.exports = vowels;