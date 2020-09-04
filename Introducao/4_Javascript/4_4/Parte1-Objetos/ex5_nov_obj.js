let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

function showValues(info, info2) {
  for (let item in info && info2) {
    if (item == "recorrente") {
      if (info[item] && info2[item] == "Sim") {
        console.log("Ambas Recorrentes")
      } else {
        message = info[item] + " e " + info2[item]
        console.log(message)
      }
    } else {
      let message = info[item] + " e " + info2[item]
      console.log(message)
    }
  }
}
showValues(info, info2)