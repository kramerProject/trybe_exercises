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


const createReport = (allLessons, chosenTeacher) => {
  let report = {}
  let sum = 0
  let listOfSubject = []

  const arrayOfLessons = Object.entries(allLessons)

  for (index = 0; index < arrayOfLessons.length; index += 1) {
    let teacher = allLessons[arrayOfLessons[index][0]].professor
    if (teacher === chosenTeacher) {
      let numberOfStudents = allLessons[arrayOfLessons[index][0]]['numeroEstudantes']
      listOfSubject.push(allLessons[arrayOfLessons[index][0]].materia)
      sum += numberOfStudents
    }
  }
  report = {
    professor: chosenTeacher,
    aulas: listOfSubject,
    estudantes: sum
  }
  return report
}

console.log(createReport(allLessons, 'Carlos'))