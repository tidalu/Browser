const log = require('./api.js')

const stream = log('something')
let n = 0
const iv = setInterval(() => {
    stream.write(Date.now() + '\n')
    if (n++ === 5) {
        clearInterval(iv)
        stream.end()
    }
}, 10)