const fs = require('node:fs/promises');
const folder = process.argv[2] ?? '.'

async function ls (folder){
    let files
    try {
        files = await fs.readdirSync(folder)
    } catch {
        console.error(`no se pudo leer el directorio ${folder}`)
    }
}