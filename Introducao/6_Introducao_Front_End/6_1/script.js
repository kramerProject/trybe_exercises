const states = ["AC", "AL", "AP", "AM", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO", "DF"]

const validateButton = document.getElementById("validate")
const clearButton = document.getElementById("clear")

const houseChoice = document.getElementById("house")
const apChoice = document.getElementById("apartment")

houseChoice.addEventListener("click",  function() {
  if (apChoice.classList.contains("line-content")) {
    apChoice.classList.remove("line-content")
  }
  if(houseChoice.classList.contains("line-content") === false) {
    houseChoice.classList.add("line-content")
  }
})

apChoice.addEventListener("click",  function() {
  if (houseChoice.classList.contains("line-content")) {
    houseChoice.classList.remove("line-content")
  }
  if(apChoice.classList.contains("line-content") === false) {
    apChoice.classList.add("line-content")
  }
})

loadStates(states)

clearButton.addEventListener("click", function() {
  const cvContent = document.getElementsByClassName("line-content")
  const resumeContent = document.querySelector("#resume-content")
  const lineResumeContent = document.querySelectorAll(".line-resume-content")
  for (let index = 0; index < cvContent.length; index += 1) {
    cvContent[index].value = ""
  }
  if (lineResumeContent.length > 0)
    for (let content = 0; content < lineResumeContent.length; content += 1) {
      resumeContent.removeChild(lineResumeContent[content])
    }
})

validateButton.addEventListener("click", function (event){
    let message = validateDate()
    console.log(message)
    if (message === false) {
      event.preventDefault()
      /*outPutInformation()*/
    }
})

function loadStates (states) {
  const stateCombo = document.getElementById("state");
  if (stateCombo.childElementCount < 2) {
    for (let item = 0; item < states.length; item+= 1) {
      let state = document.createElement("option");
      state.innerText = states[item];
      state.value = states[item];
      stateCombo.appendChild(state);
    }
  }
}

function validateDate() {
  const initialDateInput = document.getElementById("initial-date").value
  let message = false

  if (initialDateInput.length === 10 && initialDateInput[2] === "/" && initialDateInput[5] === "/") {
    let day = parseInt(initialDateInput.slice(0, 2))
    let month = parseInt(initialDateInput.slice(3, 5))
    let year = parseInt(initialDateInput.slice(6, 10))
    message = validateDayMonthyear(day, month, year)
  } else {
    alert("Data precisa ser no formato dd/mm/yyyy")
    message = true
  }
  return message
}

function validateDayMonthyear(day, month, year) {
  let message = false
  if (day < 0 || day > 31) {
    alert("O dia precisa ser maior que 0 e menor ou igual a 31")
    message = true
  } else if (month < 0 || month > 12) {
    alert("O mês precisa ser maior que 0 e menor ou igual a 12")
    message = true
  } else if (year < 0) {
    alert("O ano não pode ser negativo")
    message = true
  }
  return message
}

function outPutInformation() {
  const formInputElement = document.getElementsByClassName("line-content")
  const labelContent = document.getElementsByClassName("label-content")
  for (let index = 0; index < formInputElement.length; index += 1) {
    let elementLabel = labelContent[index].innerText
    let elementValue = formInputElement[index].value
    createDivElement(elementLabel, elementValue)
  }
}

function createDivElement(key, value) {
  const resumeContent = document.getElementById('resume-content')
  let newDiv = document.createElement('div')
  newDiv.innerText = `${key} ${value}`
  newDiv.className = "line-resume-content"
  resumeContent.appendChild(newDiv)
}