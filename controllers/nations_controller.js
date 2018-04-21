var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var mongoose = require('mongoose');
var Nation = require('../models/nationsMenu');

exports.list = function(req, res, next){
  var nationList = Nation.NationsModel.find({}, function(err, nation){
    res.render('nationsMenu', { title: 'Nations', nations_List: nation });
  });
}
exports.create_new = function(req, res, next){
  var nation = new Nation.NationsModel({
    title: req.body.title,
    subtitle: req.body.subtitle,
    body: req.body.body,
  });

  nation.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
res.send('Successful');
}
exports.showForm = function (req, res, next) {
  res.render('nationsMenuForm');

}
