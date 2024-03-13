const http = require('http');
const server = http.createServer();
const PORT = 8000;

server.on('request', (request, response) => {
    request.on('data', () => {}).on('end', () => {
        response.write(`==== ${request.method} ${request.url}\n`)
        response.write(`> Headers\n${JSON.stringify(request.headers, null, 2)}`)
        response.end();
    });
}).once('listening', () => {
    console.log('listening on port PORT')
}).listen(PORT);