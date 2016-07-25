'use strict'

module.exports = function(min, max) {

  if (arguments.length === 1) {
    max = min
    min = 0
  }

  if (typeof min !== 'number'
    || typeof max !== 'number') {
    throw new TypeError('All arguments must be numbers')
  }

  if (min > max) {
    throw new RangeError('Max argument must be >= min')
  }

  return Math.random() * (max - min + 1) + min
}