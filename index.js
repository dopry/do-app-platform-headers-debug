const http = require('http');
const server = http.createServer();
const PORT = 8000

server.on('request', (request, response) => {
    request.on('end', () => {
        response.write(`==== ${request.method} ${request.url}\n`)
        response.write(`> Headers\n${JSON.stringify(request.headers, null, 2)}`)
        response.end();
    });
}).listen(PORT).on('listening', () => console.log(`listening on ${PORT}`));