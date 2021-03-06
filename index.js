/**
 * Dependencies.
 */

const through = require('through2')
const EOL = require('os').EOL
const stringify = require('json-stringify-safe')


/**
 * Serialize data and add line break.
 *
 * @return {Stream}
 * @api public
 */

module.exports = (opts) => {
  return through.obj(opts, function(obj, enc, cb) {
    cb(null, stringify(obj) + EOL)
  })
}
