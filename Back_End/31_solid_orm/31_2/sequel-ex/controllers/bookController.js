const express = require('express');
const { Book } = require('../models');
const router = express.Router();

// ...

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
router.get('/books', async (req, res) => {
  try {
    const book = await Book.findAll();

    if (!book) return res.status(404).json({ message: 'livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/books', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body
    console.log(req.body)
    const book = await Book.create({ title, author, pageQuantity });

    if (!book) return res.status(404).json({ message: 'livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/books/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body
    const { id } = req.params
    
    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    console.log(updateBook)

    

    return res.status(200).json({ messag: "updated successfully"});
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy(
      { where: { id } },
    );

    return res.status(200).json({ messag: "removed successfully"});
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});



module.exports = router;

