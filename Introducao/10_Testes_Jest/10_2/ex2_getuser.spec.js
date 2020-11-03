const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  // essa funcao ja nao retorna a promise resolvida
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

  describe('get user by name', () => {
    it('should return an Object corresponding to the id', () => {
      expect.assertions(1);
      return getUserName(4).then(user => {
        expect(user).toEqual('Mark')
      })
    })
    it('should throw error when id is not found ', () => {
      expect.assertions(1);
      return getUserName(14).catch(error => {
        expect(error).toEqual({ error: 'User with 14 not found.' })
      })
    })  
  })