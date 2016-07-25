const http = require('http');

const PORT=3333;
let visitors = 1;

const server = http.createServer((req, res) => {
  console.log(req.url);
  const html = `
    <h1>Hi</h1>
    <p> you asked for url "${req.url}"</p>
    <p>visitors: ${visitors}</p>`;

    res.end(html);
    visitors++;
});

server.listen(PORT);
