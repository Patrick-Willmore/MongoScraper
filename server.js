'use strict';

var mongoose = require('mongoose');
var request = require("request");

var logger = require("logger");
var express = require("express");
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 3000

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


var cheerio = require("cheerio");




app.use(express.static('public'));
var databaseUrl = 'mongodb://heroku_n51t2td9:evan1sawesome.mlab.com:23609/heroku_n51t2td9';

// mongoose.Promise = Promise;
// mongoose.connect(databaseUrl, {
//   useMongoClient: true
// });

// if (process.env.MONGODB_URI) {
//     mongoose.connect(process.env.MONGODB_URI);
// } else {
//     mongoose.connect(databaseUrl);
// }

var db = process.env.databaseUrl || "mongodb://localhost/300";


// db.on('error', function(err){
//     console.log('Mongoose error: ', err);

// });

// db.once('open', function(){
//     console.log('mongoose connection successful.');
// });

app.use(bodyParser.urlencoded({
    extended:false
}));

mongoose.connect(db, function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("mongoose is connected");
    }
});
app.listen(port, function(){
    console.log("App listening on PORT " + port);
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
