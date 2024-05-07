const net = require('net');
const crypto = require('crypto');
const pw = 'abc123';
const iv = crypto.randomBytes(16);
const pump = require('pump');
net
  .createServer(function (stream) {
    pump(
      stream,
      crypto.createDecipheriv('aes-192-cbc', pw, iv),
      net.connect(5000, 'localhost'),
      crypto.createCipheriv('aes-192-cbc', pw, iv),
      stream,
      function (err) {
        console.log(err);
      }
    );
  })
  .listen(5005, console.log('listening on port 5001'));
