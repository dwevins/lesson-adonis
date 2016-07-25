const http = require('http');

const PORT=3333;

const server = http.createServer((req, res) => {
  const html = `
    <h1>Hi</h1>
    <p> you asked for url "${req.url}"</p>`;

    res.end(html);
});

server.listen(PORT);
