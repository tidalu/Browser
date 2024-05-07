const duplexify = require('duplexify')
const mkdirp = require('mkdirp');
const fs = require('fs') 

module.exports = function (name) {
    const d = duplexify()
    mkdirp.mkdirp('logs', function (err) {
        let w = fs.createWriteStream('logs/' + name + '.log')
        d.setWritable(w)
    })
    return d
}