let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

function inclusion(info) {
  info["recorrente"] = "Sim"
  console.log(info)
}
inclusion(info)