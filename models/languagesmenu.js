'use strict';
module.exports = (sequelize, DataTypes) => {
  var languagesMenu = sequelize.define('languagesMenu', {
    media: DataTypes.STRING,
    title: DataTypes.STRING,
    body_1: DataTypes.STRING,
    body_2: DataTypes.STRING,
    body_3: DataTypes.STRING,
    body_4: DataTypes.STRING,
    body_5: DataTypes.STRING,
    body_6: DataTypes.STRING
  }, {});
  languagesMenu.associate = function(models) {
    // associations can be defined here
  };
  return languagesMenu;
};