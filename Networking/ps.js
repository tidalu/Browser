const spawn = require('child_process').spawn


const ps = spawn('grep',['potato'])

ps.stdout.pipe(process.stdout)

ps.stdin.write('cheese\n')
ps.stdin.write('carrot potato\n')
ps.stdin.write('carrot\n')
ps.stdin.write('potato\n')

ps.stdin.end()