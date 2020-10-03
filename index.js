const http = require('http');

const hostname = '127.0.0.1'; const port = 4000;

const server = http.createServer((req, res) => {
        res.statusCode = 200;    
        res.setHeader('Content-Type', 'text/plain');   
        let date = new Date();
        let d = date.toString(); 
        res.end(d);
});

server.listen(port, hostname, () => {    
    console.log(`Server running at http://${hostname}:${port}/`);
});