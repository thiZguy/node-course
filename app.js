/**
 * @author Santiago Montero
 * @url santiagomf.com
*/

const http = require('http');
const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
  console.log('This always runs');
  next();
});

app.use('/add-product',(req, res, next) => {
  console.log('I´m the NEXT middleware');
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/',(req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
  next();
});

app.listen(3000, ()=> console.log('node-course listening on port 3000'));