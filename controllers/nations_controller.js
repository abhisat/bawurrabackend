var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var mongoose = require('mongoose');
var Nation = require('../models/nationsMenu');
var nat;

exports.APICall = function(req, res, next){
  var nationJson = Nation.NationsModel.find({}).lean().exec((err, nation) => {
    if (err) res.send(err);
    else return(nation);
  });
}

exports.list = function(req, res, next){
  var nationList = Nation.NationsModel.find({}, function(err, nation){
    res.render('nationsMenu', { title: 'Nations', nations_List: nation });
  });
}
exports.create_new = function(req, res, next){
  var nation = new Nation.NationsModel({
    title: req.body.title,
    subtitle: req.body.subtitle,
    body: req.body.body
  });

  nation.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
res.redirect('/nationsMenu');
}
exports.showForm = function (req, res, next) {
  res.render('nationsMenuForm');

}

exports.editOrDelete = function(req, res, next){
  if(req.body.option=='edit'){
    Nation.NationsModel.find({'title': req.body.title}, function(err, nation){
      nat = nation;
      res.render('nationsMenuUpdate', {title: 'Nations Update', nation: nation})
    });
  }
  else if (req.body.option=='delete') {
    Nation.NationsModel.remove({'title': req.body.title}, function(err, nation){
      res.redirect('/nationsMenu');
    });
  }
}

exports.editUpdate = function(req, res, next){
  Nation.NationsModel.findOneAndUpdate({'title': nat[0].title}, {
    title: req.body.title,
    subtitle: req.body.subtitle,
    body: req.body.body
  }, function(err, docs){
    console.log(err);
  });
  res.redirect('/nationsMenu');
}
