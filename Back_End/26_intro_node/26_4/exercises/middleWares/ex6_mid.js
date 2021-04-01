
const ex6MiddleWare = (err, req, res, next) => {
  console.log('entrou  no mid')
  if(err) {
    res.status(500).send('Internal error server')
  }

  return res.send({
    message: err.message
  })
  
}

module.exports = ex6MiddleWare;