const fs = require('node:fs')

fs.createReadStream(process.argv[2])
    .pipe(process.stdout)