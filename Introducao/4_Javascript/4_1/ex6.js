let chessPiece = "rainha"

let lower = chessPiece.toLowerCase()


switch(lower) {
  case "bispo":
    console.log("Diagonal")
    break;
  case "cavalo":
    console.log("Em l")
    break;
  case "peao":
    console.log("Vertical")
    break;
  case "torre":
    console.log("Vertical e Horizontal")
    break;
  case "rainha":
    console.log("Vertical, Horizontal e Diagonal")
    break;
  case "rei":
    console.log("Vertical, Horizontal e Diagonal")
    break;
  default:
    console.log("Digite uma peça válida")
}