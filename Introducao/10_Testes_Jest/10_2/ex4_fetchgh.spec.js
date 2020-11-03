const { get } = require('http');
const fetch = require('node-fetch');
const { isMainThread } = require('worker_threads');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

const getDirectory = async (reponame) => {
  const data = await getRepos('https://api.github.com/users/tryber/repos')
  return data.filter(element => element === reponame)
}


describe('get repo by name', () => {
  it('should return repo name', async () => {
    const data = await getDirectory('covid-news-api')
    expect(data).toContain('covid-news-api')
  })
  it('should not return repo name', async () => {
    const data = await getDirectory('sd-01-week4-5-project-todo-list')
    expect(data).not.toContain('sd-01-week4-5-project-todo-list')
  })
  it('should not return repo name', async () => {
    const data = await getDirectory('sd-01-week4-5-project-meme-generator')
    expect(data).not.toContain('sd-01-week4-5-project-meme-generator')
  })
})
