'use strict';
module.exports = (sequelize, DataTypes) => {
  var subMenu = sequelize.define('subMenu', {
    menu_title: DataTypes.STRING,
    title: DataTypes.STRING,
    media_1: DataTypes.STRING,
    body: DataTypes.STRING,
    media_2: DataTypes.STRING
  }, {});
  subMenu.associate = function(models) {
    // associations can be defined here
  };
  return subMenu;
};