/**
 * Test dependencies.
 */

const test = require('tape')
const concat = require('concat-stream')
const transform = require('..')

test('should be a duplex stream', assert => {
  assert.plan(1)
  const stream = transform()
  stream.on('data', data => assert.ok('data received'))
  stream.write({})
  stream.end()
})


test('should add line delimiter to chunks of strings', assert => {
  assert.plan(1)
  const stream = transform()
  stream.pipe(concat(str => {
    assert.equal(str, `"hello"\n"world"\n`)
  }))
  stream.write('hello')
  stream.write('world')
  stream.end()
})

test('should add line delimiter to chunks of objects', assert => {
  assert.plan(1)
  const stream = transform()
  stream.pipe(concat(str => {
    assert.equal(str, `{"name":"hello"}\n{"foo":"bar"}\n`)
  }))
  stream.write({
    name: 'hello'
  })
  stream.write({
    foo: 'bar'
  })
  stream.end()
})
