import {decodedValue} from '../src/3.resistor-color-duo'

describe('Resistor Colors', () => {
  test('Brown and black', () => {
    expect(decodedValue(['brown', 'black'])).toEqual(10)
  })

  test('Blue and grey', () => {
    expect(decodedValue(['blue', 'grey'])).toEqual(68)
  })
  
  test('Whteste and red', () => {
    expect(decodedValue(['white', 'red'])).toEqual(92)
  })
  
  test('Yellow and violet', () => {
    expect(decodedValue(['yellow', 'violet'])).toEqual(47)
  })
  
  test('Orange and orange', () => {
    expect(decodedValue(['orange', 'orange'])).toEqual(33)
  })

  test('Red and black', () => {
    expect(decodedValue(['red', 'black'])).toEqual(20)
  })
  
  test('Ignore addtestional colors', () => {
    expect(decodedValue(['green', 'brown', 'orange'])).toEqual(51)
  })
  
  test('Black and brown, one-digtest', () => {
    expect(decodedValue(['black', 'brown'])).toEqual(1)
  })
})