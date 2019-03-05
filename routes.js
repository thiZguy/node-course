// const fs = require('fs');

const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/') {
    res.write(`
    <html>
      <head><title>Enter User</title></head>
      <body><form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit" >submit</button></form></body>
    </html>
    `);
    return res.end();
	}
	if(url === '/users')  {
		res.setHeader('Content-Type', 'text/html');
  	res.write(`<html><head><title>MY USERS PAGE</title></head><body><h1>HELLO USERS</h1><ul><li>USER 1</li><li>USER 2</li><li>USER 3</li></ul></body></html>`);	
		return res.end();
	}
  if (url === '/create-user' && method === 'POST') {		
    const body = [];
    req.on('data', (chunk) => {
			body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log('the user we got: ', message);
			  
    });
    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`<html><head><title>MY FIRST PAGE</title></head><body><h1>HELLO USERS</h1></body></html>`);
  res.end();
}

module.exports = {
	routes: routeHandler
}
