let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};

function showKeys(info) {
  for (let item in info) {
    console.log(item)
  }
}

showKeys(info)