const  http = require('node:http')
const ecstatic = require('ecstatic')
const wsock = require('websocket-stream')
const through = require('through2')


const server  = http.createServer(ecstatic(__dirname+ '/public'))


server.listen(5000, () => {
    console.log('server listening')
})


wsock.createServer({server: server}, function (stream) {
    // inside stream is a duplex stream
    stream.pipe(loud()).pipe(stream)
})



function loud() {
    return through(function (buf, enc, next) {
        next(null, buf.toString().toUpperCase())
    })
}

