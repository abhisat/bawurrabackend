'use strict';
module.exports = (sequelize, DataTypes) => {
  var nationsMenu = sequelize.define('nationsMenu', {
    title: DataTypes.STRING,
    sub_title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  nationsMenu.associate = function(models) {
    // associations can be defined here
  };
  return nationsMenu;
};