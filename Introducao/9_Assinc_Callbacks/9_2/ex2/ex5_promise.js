const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from({length: 10},
      () => Math.floor(Math.random() * 50) + 1);
    
    const result = myArray.map(number => number * number).reduce((acc, nextNumber) => acc += nextNumber)
    result <= 8000? resolve(result) : reject()
  })
  myPromise
    .then(result => secondPromise([2, 3, 5, 10].map(number => result / number)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

const secondPromise = (array) => {
  const newPromise = new Promise((resolve, reject) => {
    array? resolve(array) : reject()
  })
  newPromise
    .then(array => console.log(array.reduce((acc, nextNumber) => acc += nextNumber)))
    .catch(() => console.log('to na segunda promise'))
};
fetchPromise()