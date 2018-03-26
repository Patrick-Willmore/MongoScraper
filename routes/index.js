const express = require('express');

const route = express.Router();
 

route.get('/', (req, res, next)=> {

    res.render('../views/layouts/main.handlebars');
});



module.exports = route;