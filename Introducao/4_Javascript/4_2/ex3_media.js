let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let addition = 0
let average = 0


for (let position = 0 ; position < numbers.length ; position++) {
  addition += numbers[position]
}
average = addition / numbers.length
console.log(average)