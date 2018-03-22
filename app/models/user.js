var Sequelize = require('sequelize');

var sequelize = require('../config/connection.js');

var User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
});

User.sync();

module.exports = User;
