const express = require('express');
const UserRouter = express.Router();
const UserModel = require('../models/UserModel');

const { postUserMiddleware } = require('../middleWares');

UserRouter.post('/user', postUserMiddleware, async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  await UserModel.createUser(first_name, last_name, email, password)
  res.status(201).json({message: 'Usuário criado com sucesso'})
})

UserRouter.get('/user', async(req, res) => {
  const usersRes = await UserModel.getAll();

  return res.status(200).json(usersRes[0])
})

UserRouter.get('/user/:id', async(req, res) => {
  const { id } = req.params;
  const userRes = await UserModel.getUserById(id);

  if (userRes.length > 0) res.status(200).json(userRes)
  else res.status(404).json({message: 'USER NOT FOUND'})
})

UserRouter.put('/user/:id', async(req, res) => {
  const { id } = req.params;
  await UserModel.editUserById('novo nome', id);
  const userRes = await UserModel.getUserById(id);

  res.status(200).json({message: 'SUCESS'})
})

UserRouter.delete('/user/:id', async(req, res) => {
  const { id } = req.params;
  await UserModel.deleteUser(id);
  

  return res.status(200).json({message: 'DELETED'})
})




module.exports = UserRouter;