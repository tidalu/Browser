const zlib = require('zlib')
const createHash = require('crypto').createHash;

process.stdin
    .pipe(zlib.createGunzip())
    .pipe(createHash('sha512', { encoding: 'hex' }))
    .pipe(process.stdout)