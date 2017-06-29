/**
 * Test dependencies.
 */

const test = require('tape')
const transform = require('..')

test('should be a duplex stream', assert => {
  assert.plan(1)
  const stream = transform()
  stream.on('data', data => assert.ok('data received'))
  stream.write({})
  stream.end()
})
