var split = require('split2') 
var to = require('to2')


process.stdin   
    .pipe(split())
    .pipe(to(write, end ))

let count = 0

function write (buf, enc, next) {
    count++
    next()
}

function end () {
    console.log('count:', count)
}