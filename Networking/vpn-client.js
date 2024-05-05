const net = require('net')
const crypto = require('crypto')
const pw = 'abc123'
const iv = crypto.randomBytes(16);
var stream  = net.connect(5005, 'localhost')
process.stdin
    .pipe(crypto.createCipheriv('aes-192-cbc', pw, iv))
    .pipe(stream)
    .pipe(crypto.createDecipheriv('aes-192-cbc', pw, iv))
    .pipe(process.stdout)
