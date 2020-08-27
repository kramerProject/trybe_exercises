let grade = 90

if (grade > 100) {
  console.log("Digite um numero de zero a 100")
} else if (grade >= 90) {
  console.log("A")
} else if (grade >= 80) {
  console.log("B")
} else if (grade >= 70) {
  console.log("C")
} else if (grade >= 60) {
  console.log("D")
} else if (grade >= 50) {
  console.log("E")
} else if (grade >= 0 && grade < 50) {
  console.log("F")
} else {
  console.log("Digite um numero de zero a 100")
}