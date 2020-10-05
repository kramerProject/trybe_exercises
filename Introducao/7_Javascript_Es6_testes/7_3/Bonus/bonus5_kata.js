const assert = require('assert')

const upperTest = (element) => {
  if (element === element.toUpperCase()) {
    return true
  }
}

const lowerTest = (element) => {
  if (element === element.toLowerCase()) {
    return true
  }
}

const numberTest = (element) => {
  const number = parseInt(element) - parseInt(element)
  if (number === 0) {
    return true
  }
}
const verify = (password) => {
  let message = ""
  const isUpper = password.split('').some(upperTest)
  const isLower = password.split('').some(lowerTest)
  const isNumber = password.split('').some(numberTest)
  if (password === '') {
    throw new Error('password should not be null')
  } else if (password.length > 0 && password.length <= 8) {
    throw new Error('password should be larger than 8 chars')
  } else if (isUpper === false) {
    throw new Error('password should have one upper case')
  } else if (isLower === false) {
    throw new Error('password should have one lower case')
  } else if (isNumber === false) {
    throw new Error('password should have one number')
  }

}


const password = 'QQQQQQQQQQQQQQkkkQQQQQQ'
assert.throws(() => {verify(''); }, /^Error: password should not be null$/);
assert.throws(() => {verify('1234567'); }, /^Error: password should be larger than 8 chars$/);
assert.throws(() => {verify('kkkkkkkkkkkkk'); }, /^Error: password should have one upper case$/);
assert.throws(() => {verify('KKKKKKKKKKKKKKK'); }, /^Error: password should have one lower case$/);
assert.throws(() => {verify('KKKKKKKKKKKKKKKk'); }, /^Error: password should have one number$/);

