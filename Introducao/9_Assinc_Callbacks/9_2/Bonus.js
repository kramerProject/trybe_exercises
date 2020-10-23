const fetchPromise = () => {
  const myArray = Array.from({length: 10},
    () => Math.floor(Math.random() * 50) + 1);
  
  const result = myArray.map(number => number * number).reduce((acc, nextNumber) => acc += nextNumber)
  if (result > 8000) throw new Error();

  return result
};

const generateFinalArray = (result) => {
  return [2, 3, 5, 10].map(number => result / number)
}
const secondPromise = async() => {
  try {
    const sumNumber = await fetchPromise()
    const array = await generateFinalArray(sumNumber)
    console.log(array)
  } catch (erro) {
    console.log('É mais de 8000')
  }
};

secondPromise()



