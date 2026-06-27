const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url === '/'|| req.url === '/test') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});
const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;

