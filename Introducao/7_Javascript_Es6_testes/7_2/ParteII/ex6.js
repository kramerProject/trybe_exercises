const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const gatherLesson = (arrayOfLesson) => {
  const allLessons = {}
  for (let lesson = 0; lesson < arrayOfLesson.length; lesson += 1) {
    allLessons[`lesson${lesson + 1}`] = arrayOfLesson[lesson]
  }
  return allLessons
}

const allLessons = gatherLesson([lesson1, lesson2, lesson3])

const numberOfStudents = (allLessons) => {
  let sum = 0
  const arrayOfLessons = Object.entries(allLessons)
  for (let item = 0; item < arrayOfLessons.length; item += 1) {
    let lesson = arrayOfLessons[item][0]
    let number = allLessons[lesson]['numeroEstudantes']
    sum += number
  }
  return sum
}

console.log(numberOfStudents(allLessons))
