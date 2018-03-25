const express = require('express');

const route = express.Router();
 

route.get('/', (req, res, next)=> {

    res.render('../views/layouts/main.handlebars');
});

// route.get('/info', (req, res, next)=> {
//     res.send('info page');
// });

module.exports = route;