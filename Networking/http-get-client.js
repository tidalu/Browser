const http = require('http')

const req = http.request({
    method: 'GET',
    host: 'localhost',
    port: 5000,
    url: '/'
}, function (res) {
    console.log(res.statusCode, res.headers)
    res.pipe(process.stdout)
})

req.end('')