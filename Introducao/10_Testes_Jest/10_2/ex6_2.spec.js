const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => {
  // Adicione o código aqui.
  return new Promise((resolve, reject) => {
    const data = Animals.filter(animal => animal.age === age)
    if (data) {
      return resolve(data)
    } else {
      return reject('Invalid age')
    }
  });
}

const getAnimal = async (age) => (findAnimalByAge(age).then(age => age))

describe('Test find animal by age', () => {
  describe('test valid age', () => {
    it('should return an array of objects', async () => {
      expect.assertions(1);
      const result = await getAnimal(2)
      expect(result).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }])
    })
  })

  describe('test valid age', () => {
    it('should throw error', async ()  => {
      expect.assertions(1);
      try {
        await getAnimal(2000)
      } catch (error) {
        return expect(error).toEqual('Invlid age')
      }  
    })
  })
})