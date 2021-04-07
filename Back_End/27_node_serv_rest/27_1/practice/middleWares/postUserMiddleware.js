

const postUserMiddleware = async function(req, res, next) {
  const { first_name, last_name, email, password } = req.body;
  
  if (!first_name || typeof(first_name) !== 'string') {
    return res.status(200).json({ message: 'Dados inválidos'})
  } else if (!last_name || typeof(last_name) !== 'string') {
    return res.status(200).json({ message: 'Dados inválidos'})
  } else if (!email || typeof(email) !== 'string' ) {
    return res.status(200).json({ message: 'Dados inválidos'})
  } else if (!password || typeof(password) !== 'string' || password.length < 6) {
    return res.status(200).json({ message: 'Dados inválidos'})
  }

  next();
}

module.exports = postUserMiddleware;
