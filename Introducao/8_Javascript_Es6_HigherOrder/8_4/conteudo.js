
const nationality = ({ firstName, nationality }) => {
  if (nationality) {
    return `${firstName} is ${nationality}`
  }
    return `${firstName} is ${nationality = 'Brazilian'}`
}



const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))

const getLo = () => 'lo'
let obj2 = {  
  [ "hel" + getLo() ]: "world"
}

console.log(obj2)