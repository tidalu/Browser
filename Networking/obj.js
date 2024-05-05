const through = require('through2')
let size = 0
process.stdin
    .pipe(through.obj(write))
    .pipe(through.obj(write2, end))

function write( buf, enc, next) {
    next(null, { length: buf.length})
}


function write2(obj, enc, next) {
    size += obj.length

    next()
}


function end () {   
    console.log('size:', size)
}