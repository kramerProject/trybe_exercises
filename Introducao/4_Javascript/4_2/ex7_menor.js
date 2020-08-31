let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let smallest = 0


for (let position = 0 ; position < numbers.length ; position +=1 ) {
  if (position == 0) {
    smallest = numbers[position]
  } else {
    if (numbers[position] < smallest) {
      smallest = numbers[position]
    } 
  }
}

console.log(smallest)