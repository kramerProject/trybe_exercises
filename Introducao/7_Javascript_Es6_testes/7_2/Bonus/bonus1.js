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

const lessons = [lesson1, lesson2, lesson3]

const gatherLesson = (arrayOfLesson) => {
  const allLessons = {}
  for (let lesson = 0; lesson < arrayOfLesson.length; lesson += 1) {
    allLessons[`lesson${lesson + 1}`] = arrayOfLesson[lesson]
  }
  return allLessons
}


const allLessons = gatherLesson(lessons)


const numberOfSubjectStudents = (allLessons, chosenSubject) => {
  let sum = 0
  const arrayOfLessons = Object.entries(allLessons)
  for (index = 0; index < arrayOfLessons.length; index += 1) {
    let subject = allLessons[arrayOfLessons[index][0]].materia
    if (subject === chosenSubject) {
      let numberOfStudents = allLessons[arrayOfLessons[index][0]]['numeroEstudantes']
      sum += numberOfStudents
    }
  }
  return `A matéria matemática possui ${sum} estudantes`
}

console.log(numberOfSubjectStudents(allLessons, 'História'))