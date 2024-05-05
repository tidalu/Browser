const concat = require('concat-stream');
const through = require('through2');
const http = require('http');
const qs = require('querystring');

var server = http.createServer(function (req, res) {
  console.log('request acceped:');

  req.pipe(counter()).pipe(concat({ encoding: 'string' }, onbody));

  function onbody(body) {
    const params = qs.parse(body);
    console.log(params);
    res.end('ok\n');
  }

  function counter () {
    let size = 0
    return through( function (buf, enc, next) {
        size += buf.length  
        if(size > 20) {
            res.end('very biig\n')
            // next(null, null)
        } else {
            next(null, buf)
        }

    })
  }
  
});

server.listen(5000, () => {
  console.log('listening');
});
