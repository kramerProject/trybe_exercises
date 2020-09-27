
const fatorialFunction = (number) => {
  let result = 1
  for (let index = number; index >= 1; index -= 1) {
    result *= index
  }
  return result
}

const fatorialRecursivo = (number) => {
  if (number === 0) {
    return 1
  }
  return number * fatorialRecursivo(number - 1)
}

console.log(fatorialRecursivo(5))