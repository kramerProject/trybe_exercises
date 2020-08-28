function myWage(wage) {
let netSalary = 0

let inssTax8 = 0.08
let inssTax9 = 0.09
let inssTax11 = 0.11
let inssTaxFix = 570.88

let govTax75 = 0.075
let govTax15 = 0.15
let govTax22 = 0.225
let govTax27 = 0.275

  if (wage > 5189.82) {
    baseWage = wage - inssTaxFix
  } else if (wage >= 2594.93) {
    baseWage = wage * (1-inssTax11)
  } else if (wage >= 1556.95) {
    baseWage = wage * (1-inssTax9)
  } else {
    baseWage = wage * (inssTax8)
  }

  if (baseWage >= 4664.68) {
    netSalary = baseWage- ((baseWage * govTax27) - 869.36)
  } else if (baseWage >= 3751.06) {
    netSalary = baseWage - ((baseWage * govTax22) - 636.13)
  } else if (baseWage >= 2826.66) {
    netSalary = baseWage - ((baseWage * govTax15) - 354.80)
  } else if (baseWage >= 1903.99) {
    netSalary = baseWage - ((baseWage * govTax75) - 142.80)
  } else {
    netSalary = baseWage
  }
  console.log(netSalary)
}

myWage(3000)