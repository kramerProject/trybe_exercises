const phrase = 'Tryber x aqui x tb x!'
const skills = ['Logica', 'HTML', 'CSS', 'Javascript', 'Finanças']

const substitute = (words) => {
  let newPhrase = ""
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === 'x') {
      newPhrase += words
    } else {
      newPhrase += phrase[index]
    }
  }
  return newPhrase
}
const newPhrase = substitute('bebeto')

const finalPhrase = (newPhrase) => {
  let sortedSkills = skills.sort()
  let message = `${newPhrase}! Minhas cinco principais habilidades são:`

  sortedSkills.forEach((skill) => 
  message = `${message}
  - ${skill}`)
  message = `${message} 
  #goTrybe`
  return message
}

console.log(finalPhrase(newPhrase))