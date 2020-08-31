let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

newArray = []

for (position = 0 ; position < numbers.length ;position +=1 ) {
  if (position == numbers.length - 1) {
    newArray.push(numbers[position]*2)
  } else {
    newArray.push(numbers[position]*numbers[position+1])
  }
}
console.log(newArray)

