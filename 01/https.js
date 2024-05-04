const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log('req received');
    res.end('Hola los tilines')
})

server.listen(3000, () => {
    console.log(`server listening on port ${server.address().port}`);
})