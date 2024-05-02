const fs = require('fs')

const r = fs.createReadStream(process.argv[2])
r.pipe(process.stdout)