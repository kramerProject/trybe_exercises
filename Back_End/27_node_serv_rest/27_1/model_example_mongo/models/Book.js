const connection = require('./connection');
const {  ObjectId } = require('mongodb');

const Author = require('./Author')


const getNewBook = (bookData) => {
  const { id, title, author_id } = bookData;
    
  return {
    id,
    title,
    author_id
   };
  };

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((authors) =>
      authors.map(({ _id, title, author_id }) =>
        getNewBook({
          id: _id,
          title,
          author_id
        })
      )
  );
}



const getBookById = async (id) => {
  const books = await connection()
    .then((db) => db.collection('books').findOne(ObjectId(id)));

  return books;
}

const getAuthorById = async (id) => {
  const authors = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)));

  return authors;
}

const isValid = async (title, author_id) => {

  const authorFound = await getAuthorById(author_id) 
  console.log('author found')
  console.log(authorFound)
  if (!title || title.length < 3) {
    return false
  } else if (!author_id || authorFound.length === 0 || !authorFound) {
    return false;
  }

  return true
}

const create = async (title, author_id) => {
  connection()
    .then((db) => db.collection('books').insertOne({title, author_id}))
    .then((result) => {
      return {
        id: result.insertedId,
        title,
        author_id
      }
    })
}

module.exports = {
  getAll,
  getBookById,
  isValid,
  create
}