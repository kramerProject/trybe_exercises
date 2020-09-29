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

const allLessons = [lesson1, lesson2, lesson3]
console.log(gatherLesson(allLessons))




