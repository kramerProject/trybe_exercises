// Data
const users = [
  {
    login: 'knuth',
    firstName: 'Donald',
    lastName: 'Knuth',
    likes: ['C', 'Unix'],
  },
  {
    login: 'norvig',
    firstName: 'Peter',
    lastName: 'Norvig',
    likes: ['AI', 'Search', 'NASA', 'Mars'],
  },
  {
    login: 'mfowler',
    firstName: 'Martin',
    lastName: 'Fowler',
    likes: ['Design Patterns', 'Refactoring'],
  },
  {
    login: 'kent',
    firstName: 'Kent',
    lastName: 'Beck',
    likes: ['TDD', 'wikis', 'Design Patterns'],
  },
];

// lookup()
const lookup = (login, property) => {
  // START -- THIS IS WHERE YOUR CODE GOES
  // END
  const filterObject = users.filter(user => user['login'] === login)
  
  if (filterObject.length > 0) {
    if (filterObject[0][property] != undefined) {
      return filterObject[0][property]
    } else {
      throw new Error('Could not find property')
    } 
  } else {
    throw new Error('Could not find user')
  }
};



// Tests
describe('lookup()', () => {
  it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
    const actual = lookup('norvig', 'likes');
    const expected = ['AI', 'Search', 'NASA', 'Mars'];

    expect(actual).toEqual(expected);
  });
  it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
    const actual = lookup('knuth', 'lastName');
    const expected = 'Knuth';

    expect(actual).toEqual(expected);
  });
  it('with unknown user should throw an error with the correct message', () => {
    expect(() => {
      lookup('nobody', 'likes');
    }).toThrow(/Could not find user/);
  });
  it('with unknown property should throw an error the correct message', () => {
    expect(() => {
      lookup('mfowler', 'noprop');
    }).toThrow(/Could not find property/);
  });
});