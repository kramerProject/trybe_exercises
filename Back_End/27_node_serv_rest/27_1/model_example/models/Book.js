const connection = require('./connection');

const Author = require('./Author')

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;',
  )

  return books;
}

const getBookById = async (id) => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books WHERE id = ?',
    [id]
  )

  return books;
}

const getAuthorById = async (id) => {
  const [authors] = await connection.execute(
    'SELECT * FROM model_example.authors WHERE id = ?',
    [id || null]
  )

  return authors;
}

const isValid = async (title, author_id) => {

  const authorFound = await getAuthorById(author_id) 
  console.log('author found')
  console.log(authorFound)
  if (!title || title.length < 3) {
    return false
  } else if (!author_id || authorFound.length === 0) {
    return false;
  }

  return true
}

const create = async (title, author_id) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, author_id],
);

module.exports = {
  getAll,
  getBookById,
  isValid,
  create
}