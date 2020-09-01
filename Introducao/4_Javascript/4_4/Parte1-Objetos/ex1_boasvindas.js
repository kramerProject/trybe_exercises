let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

function boasVindas(info) {
  let message = "Bem Vinda, " + info.personagem
  console.log(message)
}

boasVindas(info)
