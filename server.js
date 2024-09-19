const http = require('http');
const url = require('url');

const port = '3000';

const server = http.createServer((req, res) => {
    
    const pathName = req.url;

    if(pathName === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end('Hello from the server!');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });

        res.end('<h1>Page can not be found</h1>');
    }
})

server.listen(port, '127.0.0.1', () => {
    console.log(`Server is running on port http://localhost:${port}`);
})