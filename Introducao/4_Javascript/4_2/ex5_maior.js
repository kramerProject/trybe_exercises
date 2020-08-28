let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let greatest = 0


for (let position = 0 ; position < numbers.length ; position +=1 ) {
  if (position == 0) {
    greatest = numbers[position]
  } else {
    if (numbers[position] > greatest) {
      greatest = numbers[position]
    } 
  }
}

console.log(greatest)
