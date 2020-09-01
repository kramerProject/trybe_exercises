let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

function showValues(info) {
  for (let item in info) {
    let message = info[item] 
    console.log(message)
  }
}
showValues(info)

