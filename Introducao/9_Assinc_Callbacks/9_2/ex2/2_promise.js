const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const myArray = Array.from({length: 10}, () => Math.floor(Math.random() * 50) + 1);

    const result = myArray.map(number => number * number).reduce((acc, nextNumber) => acc += nextNumber)
    if (result <= 8000) resolve(result)
    return reject(result)
  })
  .then(result => console.log(result))
  .catch(result => console.log(`O número ${result} é maior que 8000.`))
  }

fetchPromise()
