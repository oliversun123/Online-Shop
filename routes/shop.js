const express = require('express');
const path = require('path');
const { getProducts, getIndex, getCart, getCheckout, getOrders } = require('../controllers/shopController');
const rootDir = require('../util/path');


const router = express.Router();

router.get('/products', getProducts)

router.get('/cart', getCart);
router.get('/checkout', getCheckout);

router.get('/orders', getOrders);

router.get('/', getIndex);



module.exports = router;