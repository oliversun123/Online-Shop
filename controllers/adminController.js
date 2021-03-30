const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    res.render('adminView/add-product', {
        pageTitle: 'add prod page',
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    const name = req.body.name;
    const imageURL = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;
    console.log(req.body);
    const product = new Product(name, imageURL, description, price);
    product.save();
    res.redirect('/');
}

exports.getAdminProducts = (req, res, next) => {
    Product.fecthAll((products) => {
        res.render('adminView/list-product', {
            prods: products, 
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
    });
}
