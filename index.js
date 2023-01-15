function checkPart (part) {
  const array = part.split('')
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array.reverse()[i]) {
      array.splice(i, 1)
      if (array.join('') === array.reverse().join('')) {
        return true
      }
    }
  }

  if (array.join('') === array.reverse().join('')) {
    return true
  }
  return false
}

module.exports = { checkPart }
