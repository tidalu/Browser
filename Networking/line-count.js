var split = require('split2') 
var through = require('through2')

process.stdin   
    .pipe(split())
    .pipe(through(write, end ))

let count = 0

function write (buf, enc, next) {
    count++
    next()
}

function end () {
    console.log('count:', count)
}