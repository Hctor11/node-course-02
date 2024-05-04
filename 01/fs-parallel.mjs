import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./archivos/hola.txt', 'utf-8'),
    readFile('./archivos/hola2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('primer text: ' + text);
    console.log('second text: ' + secondText);
})