'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize) => {
  var languagesMenu = sequelize.define('languagesMenu', {
    media: Sequelize.STRING,
    title: Sequelize.STRING,
    body_1: Sequelize.STRING,
    body_2: Sequelize.STRING,
    body_3: Sequelize.STRING,
    body_4: Sequelize.STRING,
    body_5: Sequelize.STRING,
    body_6: Sequelize.STRING
  }, {});
  languagesMenu.associate = function(models) {
    // associations can be defined here
  };
  return languagesMenu;
};
