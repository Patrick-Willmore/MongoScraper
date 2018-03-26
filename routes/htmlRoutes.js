
  var path = require("path");
  var express = require("express");
  var app = express();
  
  module.exports = function(app) {
  
      app.get('/home', function(req, res){
          res.sendFile(path.join(__dirname, "../public/home.html"));
        });
  
//   app.get("/", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/survey.html"));
  
  
  });
  
  };