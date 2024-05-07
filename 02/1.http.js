const http = require('node:http');

const server = http.createServer((req, res) => {

    if (req.url === '/'){
        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        res.end("HOLA WTF")
    }
})

// los callbacks son functiones que se ejecutan despues de que pase algo

/*
HTTP es un protocolo de transferencia de hypertexto
*/
server.listen(3000, () => {
    console.log(`server listening on port ${server.address().port}`);
})