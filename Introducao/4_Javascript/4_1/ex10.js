let price = 1000
let cost = 200
let quantity = 1
let tax = 0.2


let totalCost = (cost * (1+0.2)) * quantity
let profit = (price * quantity) - totalCost

if (price < 0 || cost < 0) {
  consolge.log("Digite um valor maior que zero")
} else {
  console.log("Valor de venda: ", price)
  console.log("Custo Total: ", totalCost)
  console.log("Lucro foi: ", profit)
}
