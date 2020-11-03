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
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

  describe('get user by id', () => {
    it('should return user name given an id', async() => {
      expect.assertions(1);
      const result = await getUserName(4)
      expect(result).toBe('Mark')
    })
    it('should throw an error when id is not found', async() => {
      expect.assertions(1);
      try {
        await getUserName(14)
      } catch (error) {
        expect(error).toEqual({ error: 'User with 14 not found.' })
      }
    })
  })