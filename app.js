const http = require('http');
const express = require('express');
const myBodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');
const { get404Page } = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(myBodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(get404Page);

app.listen(3000);