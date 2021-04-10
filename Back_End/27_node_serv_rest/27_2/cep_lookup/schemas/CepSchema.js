


const validateUserInput = (cep) => {
  const cepRegex = /\b\d{5}[-.]\d{3}/g
  if(!cepRegex.match(cep)) return { code: 404, message: 'Digite um formato válido ex: 12345-678'}

  return;
}


module.exports = { validateUserInput }