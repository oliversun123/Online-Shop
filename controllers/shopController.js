const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fecthAll((products) => {
        res.render('shopView/productList', {
            prods: products, 
            pageTitle: 'hey',
            path: '/products'
        });
    });
    
}

exports.getIndex = (req, res, next) => {
    Product.fecthAll((products) => {
        res.render('shopView/index', {
            prods: products, 
            pageTitle: 'Index Page',
            path: '/'
        });
    });
}

exports.getCart = (req, res, next) => {
    Product.fecthAll((products) => {
        res.render('shopView/cart', {
            prods: products, 
            pageTitle: 'Shopping cart',
            path: '/cart'
        });
    });
}

exports.getCheckout = (req, res, next) => {
    Product.fecthAll((products) => {
        res.render('shopView/checkout', {
            prods: products, 
            pageTitle: 'Checkout page',
            path: '/checkout',
        });
    });
}

exports.getOrders = (req, res, next) => {
    Product.fecthAll((products) => {
        res.render('shopView/orders', {
            prods: products, 
            pageTitle: 'order page',
            path: '/orders',
        });
    });
}
