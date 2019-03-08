/**
 * @author Santiago Montero
 * @url santiagomf.com
*/

const express = require('express');
const bodyParser =  require('body-parser');
const path = require('path');

// relative imports
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Not found'});
})

app.listen(3000, ()=> console.log('node-course listening on port 3000'));