import { hello } from '../src/1.hello-world'

describe('Hello World', () => {
  test('says hello world', () => {
    let expected = 'Hello, World!'
    let actual = hello()

    expect(actual).toEqual(expected)
  })
})