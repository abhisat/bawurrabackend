
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

var Language = require('../models/languagesMenu')(sequelize);

exports.list = function(req, res, next) {
  Language.find({}, '*')
    .exec(function (err, list_languages) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('languagesMenu', { languages_list: list_languages });
    });
}
