const { default: fetch } = require('node-fetch')
const api = require('../ex6')

describe('testing request', () => {
  const apiUrl = jest.spyOn(api, 'fetchUrl');
  afterEach = (apiUrl.mockReset());

  test('testing in case o success', async () => {
    apiUrl.mockResolvedValue('Sucess')
    apiUrl();
    expect(apiUrl).toHaveBeenCalled()
    expect(apiUrl).toHaveBeenCalledTimes(1)
    expect(apiUrl()).resolves.toBe('Sucess')
    expect(apiUrl).toHaveBeenCalledTimes(2)
    apiUrl.mockReset()
  })

  test('testing in case of failure', () => {
    apiUrl.mockRejectedValue('fail')

    expect(apiUrl).toHaveBeenCalledTimes(0)
    expect(apiUrl()).rejects.toMatch('fail')
    expect(apiUrl).toHaveBeenCalledTimes(1)
  })
})
