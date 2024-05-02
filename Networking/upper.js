var fs = require('fs')

const through = require('through2')

process.stdin
    .pipe(through(upper))
    .pipe(process.stdout)

function upper(buf, enc, next) {
    next(null, buf.toString().toUpperCase())
}