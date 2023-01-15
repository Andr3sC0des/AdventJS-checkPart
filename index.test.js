const { checkPart } = require('./index')

test('Test #01', () => {
  expect(typeof checkPart('uwu')).toBe('boolean')
})

test('Test #02', () => {
  expect(checkPart('uwu')).toBe(true)
})

test('Test #03', () => {
  expect(checkPart('midu')).toBe(false)
})

test('Test #04', () => {
  expect(checkPart('lolol')).toBe(true)
})

test('Test #05', () => {
  expect(checkPart('yolooloy')).toBe(true)
})

test('Test #06', () => {
  expect(checkPart('zzzoonzzz')).toBe(true)
})
