/**
 * @author Santiago Montero
 * @url santiagomf.com
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req);
  const url = req.url;
  const method = req.method;
  if(url === '/') {
    res.write(`
    <html>
      <head><title>Enter Message</title></head>
      <body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit" >submit</button></form></body>
    </html>
    `);
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);  
    });
    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`<html><head><title>MY FIRST PAGE</title></head><body><h1>HELLO WORLD</h1></body></html>`);
  res.end();
});

server.listen(3000);