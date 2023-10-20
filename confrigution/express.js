const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression'); // Updated import name
const methodOverride = require('method-override');

module.exports = () => {
    const app = express();
    
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compression()); // Updated method name
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(methodOverride());
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    const indexRoutes = require('../app/routes/index.server.route'); // Updated import path
    app.use('/', indexRoutes);

    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));
    
    return app;
};
