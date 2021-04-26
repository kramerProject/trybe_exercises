const jwt = require('jsonwebtoken');
const secret = 'seusecretdetoken';
const adminSecret = 's3nh4S3gur4???';

module.exports = (req, res, next) => {
  let token = {};
  const { username, password } = req.body

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const payload = {
    username,
    admin: false
  }

  if (username === 'admin' && password === adminSecret) {
    token = jwt.sign({ ...payload, admin: true }, secret, jwtConfig);
  } else {
    token = jwt.sign({ payload }, secret, jwtConfig);
  }

  if (username.length > 4 && password.length > 4) return res.status(200).json({ token })

  next()
}