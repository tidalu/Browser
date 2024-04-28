const http = require('http');
const parseform = require('body/any');

var server = http.createServer(function (req, res) {
  console.log(req.method, res.url, req.headers);
  parseform(req, res, function (err, params) {
    console.log(params);
    res.end('OK\n');
  });
});

server.listen(5000, () => {
  console.log('server listening');
});
