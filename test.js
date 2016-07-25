'use strict'

const float = require('./index')
const test = require('tape')

function isFloat(n) {
  if ((!isNaN(n)) && (n.toString().indexOf('.') != -1)) {
    return true
  } else {
    return false
  }
}

test('should generate a random float number', function(t) {
  t.plan(3)
  t.equal(true, isFloat(float(0,20)), "test 1")
  t.equal(true, isFloat(float(-10,10)), "test 2")
  t.equal(true, isFloat(float(2,10)), "test 3")
  t.end()
})
