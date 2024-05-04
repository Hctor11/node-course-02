const fs = require('node:fs'); // a partir de node 16 se recomienda usar node:

const stats = fs.statSync('./archivos/hola.txt') 

console.log(
    stats.isFile(),
    stats.size
)