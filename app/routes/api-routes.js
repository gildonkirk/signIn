// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var User = require("../models/user.js");


// Routes
// =============================================================
module.exports = function(app) {

  app.post('/api/new', function(req, res) {
    console.log('User Data: ');
    console.log(req.body);

    User.create({
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }).then(function(results) {
      res.end();
    });
  });

  app.get('/api/all', function(req, res) {
    User.findAll().then(function(results) {
      console.log(results);
      res.json(results);
    })
  })
};
