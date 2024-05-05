const net = require('net')
const crypto = require('crypto')
const pw = 'abc123'
const iv = crypto.randomBytes(16);
net.createServer(function(stream) {
    
    stream
        .pipe(crypto.createDecipheriv('aes-192-cbc', pw, iv))
        .pipe(net.connect(5000, 'localhost'))
        .pipe(crypto.createCipheriv('aes-192-cbc', pw, iv))
        .pipe(stream)
}).listen(5005, console.log('listening on port 5001'))