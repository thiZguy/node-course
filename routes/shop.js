
const path = require('path');
const express = require('express');
const router = express.Router();

const adminData = require('./admin');

router.get('/',(req, res, next) => {
    const products = adminData.products;
    console.log('shop.js: ', products)
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.render('shop', { products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;