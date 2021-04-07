const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM users_crud.users;'
  )
  return users;
}


const getUserById = async (id) => {
  const [user] = await connection.execute(
    'SELECT * FROM users_crud.users WHERE id = ?',
    [id]
  )

  return user;
}

const editUserById = async (value, id) => {
  connection.execute(
    'UPDATE users_crud.users SET first_name = ? WHERE id = ?',
    [value, id]
  )
}

const deleteUser = async (id) => {
  connection.execute(
    'DELETE from users_crud.users WHERE id = ?',
    [id]
  )
}

const createUser = async (first_name, last_name, email, password) => {
  connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
    [first_name, last_name, email, password],
  );
}

module.exports = {
  createUser,
  getAll,
  getUserById,
  editUserById,
  deleteUser
}