const fs = require('node:fs'); // a partir de node 16 se recomienda usar node:

console.log("reading the first directory");
fs.readFile('./archivos/hola.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
});

console.log('cosa mientras el archivo se lee OMG');

console.log("reading the second directory");
const text2 = fs.readFileSync('./archivos/hola2.txt', 'utf-8')

console.log(text2);