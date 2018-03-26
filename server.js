'use strict';

var mongoose = require('mongoose');
var request = require("request");
var cheerio = require("cheerio");
var logger = require("logger");
var express = require("express");
var exphbs  = require('express-handlebars');

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var app = express();






app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(express.static('public'));
var databaseUrl = 'mongodb://<heroku_n51t2td9>:<T[8jD%4ee9n[WM-S>@ds223609.mlab.com:23609/heroku_n51t2td9';

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(databaseUrl);
}

var db = mongoose.connection;

db.on('error', function(err){
    console.log('Mongoose error: ', err);

});

db.once('open', function(){
    console.log('mongoose connection successful.');
});


// request("https://www.reddit.com/r/Denver/", function(error, response, html) {

//   var $ = cheerio.load(html);

//   var results = [];

//   $("p.title").each(function(i, element) {

//     var link = $(element).children().attr("href");
//     var title = $(element).children().text();


//     results.push({
//       title: title,
//       link: link
//     });
//   });

//   console.log(results);
// });
