const express = require('express')
const router = express.Router()

const { validateUserInputMiddleware } = require('../middlewares/CepMiddleWare');
const { findAddress, getCepStats } = require('../services/CepService');


router.get('/lookup', validateUserInputMiddleware, async (req, res) => {
  const cep = req.normalizedCep;

  try {
    const result = await findAddress(cep)
    res.status(200).json({ ...result });
  } catch (error) {
    return res.status(401).json({ message : 'error' })
  }
})

router.get('/statistic', async (req, res) => {
  const { query } = req
  try {
    const statsRes = await getCepStats(query)
    res.status(200).json({ ...statsRes });
  } catch (error) {
    return res.status(401).json({ message : 'error' })
  }
})

module.exports = router;