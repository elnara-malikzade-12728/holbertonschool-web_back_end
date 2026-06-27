const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/test') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
});

module.exports = app;
