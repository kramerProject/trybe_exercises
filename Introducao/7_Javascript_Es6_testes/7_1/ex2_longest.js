

const longestWord = (phrase) => {
  let words = phrase.split(" ");
  let longest = 0;
  let result = "";
  for (let index = 0; index < words.length; index += 1) {
    if (words[index].length > longest) {
      result = words[index];
    }
  }
  return result;
}

console.log(longestWord('qts palavras eagoraqualamaior'))