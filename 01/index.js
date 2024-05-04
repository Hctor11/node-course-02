// import {func} from './sum.js'
const os = require('node:os');

// console.log("Hola a todos los tilines");
// console.error("TRYTING ")

// EN NODE NO HAY WINDOWWWW

/*
EL GLOBALTHIS ES UNA VARIABLE GLOBAL QUE SE PUEDE ACCEDER EN TODOS LOS LUGARES DE NUESTRA APLICACION
globalThis -> WINDOW
EL CONSOLE LOG SALE DEL GLOBALTHIS WHAAT
*/

// console.log(func(2,2))
console.log(os.platform())
console.log(os.arch())
console.log(os.release())
console.log(os.cpus())
console.log(os.freemem() / 1024 / 1024)
console.log(os.totalmem() / 1024 / 1024)


