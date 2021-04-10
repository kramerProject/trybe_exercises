const validateUserInputMiddleware = function(req, res, next) {
  const { cep } = req.query;
  const cepRegex = /\b\d{5}[-.]\d{3}/g;
  
  if(!cep.match(cepRegex)) return res.status(404).json({ message: 'Digite um formato válido ex: 12345-678' })

  req.normalizedCep = cep.replace(/\D+/g, "");
  
  next();

}


module.exports = { validateUserInputMiddleware }