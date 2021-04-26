const jwt = require('jsonwebtoken');
const secret = 'seusecretdetoken';
const adminSecret = 's3nh4S3gur4???';

module.exports = (req, res, next) => {
  const token = req.headers['authorization']

  const decoded = jwt.verify(token, secret)

  console.log(decoded)

  next()
}