const fs = require('fs');

fs.readdir('.',(err,files) => {
    if(err){
        console.error(err)
    }

    files.forEach(file => {
        console.log(file);
    })
})