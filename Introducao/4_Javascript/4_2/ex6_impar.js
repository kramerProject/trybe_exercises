let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

evenNumbers = 0
oddNumbers = []

for (let position = 0 ; position < numbers.length ; position += 1) {
  if (numbers[position] % 2 == 0) {
    evenNumbers+=1
  } else {
    oddNumbers.push(numbers[position])
  }
}

if (oddNumbers.length == 0) {
  console.log("Nenhum valor impar foi encontrado")
} else {
  console.log(`Existem ${oddNumbers.length} números impares, são eles: ${oddNumbers}.`)
}