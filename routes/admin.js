const express = require('express');
const path = require('path');
const { title } = require('process');
const { getAddProduct, postAddProduct, getAdminProducts } = require('../controllers/adminController');
const rootDir = require('../util/path');
const { route } = require('./shop');

const router = express.Router();

router.get('/products', getAdminProducts);

// /admin/add-product GET
router.get('/add-product', getAddProduct);

// /admin/add-product POST
router.post('/add-product', postAddProduct);

module.exports = router