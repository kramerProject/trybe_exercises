const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/products', async (req, res, next) => {
  try {
    const products = await ProductModel.getAll();

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
 
});

router.get('/products/:id', async (req, res, next) => {
  try {
    const product = await ProductModel.getById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
 
});

router.post('/products', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const newProduct = await ProductModel.add(name, brand);

    return res.send(newProduct);
  } catch (error) {
    res.status(400).json(error);
  }
  
});

router.delete('/products/:id', async (req, res) => {

  try {
    const products = await ProductModel.exclude(req.params.id);

    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json(error);
  }
  
});

router.put('/products/:id', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const products = await ProductModel.update(req.params.id, name, brand);

    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json(error);
  }
  
});

module.exports = router;