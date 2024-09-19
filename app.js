const http = require('http');
const fs = require('fs');

const server = http.createServer()

const clientsFile = fs.readFile('./data/clients.txt', 'utf-8', (err, data) => {
    console.log(data);
});

const textOut = `tralalalalala and we did it!`;

fs.writeFile('./data/experience.txt', textOut, 'utf-8', err => {
    
});
