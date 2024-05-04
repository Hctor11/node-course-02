const fs = require('node:fs/promises');
const folder = process.argv[2] ?? '.';
const path = require('node:path'); 

async function ls (folder){
    let files
    try {
        files = await fs.readdirSync(folder)
    } catch {
        console.error(`no se pudo leer el directorio ${folder}`)
        process.exit(1)
    }

    const filePromises = files.map(async (file) => {
        const filePath = path.join(folder, file)
        let stats

        try{
            stats = await fs.stat(filePath)
        }catch{
            console.error(`no se pudo leer el archivo ${filePath}`);
            process.exit(1)
        }
    })
}