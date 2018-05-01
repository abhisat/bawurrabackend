
var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

var Language = require('../models/languagesMenu');
var lang;

exports.APICall = function(req, res, next){
  var languageJson = Language.LanguageModel.find({}).lean().exec((err, language) => {
    if (err) res.send(err);
    else return(language);
  });
}

exports.list = function(req, res, next){
  var languagesList = Language.LanguagesModel.find({}, function(err, language){
    res.render('languagesMenu', { title: 'Languages', languages_List: language });
  });
}
exports.create_new = function(req, res, next){

  var language = new Language.LanguagesModel({
    media: typeof req.files.media !== 'undefined' ? req.files.media[0].cloudStoragePublicUrl : "No Image",
    title: req.body.title,
    body_1: req.body.body1,
    body_2: req.body.body2,
    body_3: req.body.body3,
    body_4: req.body.body4,
    body_5: req.body.body5,
    body_6: req.body.body6,
    body_7: req.body.body7,
    body_8: req.body.body8,
    body_9: req.body.body9,
    body_10: req.body.body10,
    body_11: req.body.body11,
    body_12: req.body.body12,
    body_13: req.body.body13,
    body_14: req.body.body14,
    body_15: req.body.body15

  });

  language.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
res.redirect('/languagesMenu');
}

exports.showForm = function (req, res, next) {
  res.render('languagesMenuForm');

}

exports.editOrDelete = function(req, res, next){
  if(req.body.option=='edit'){
    Language.LanguagesModel.find({'title': req.body.title}, function(err, language){
      lang = language;
      res.render('languagesMenuUpdate', {title: 'Langauge Update', language: language});
    });
  }
  else if (req.body.option=='delete') {
    Language.LanguagesModel.remove({'title': req.body.title}, function(err, language){
      res.redirect('/languagesMenu');
    });
  }
}

exports.editUpdate = function(req, res, next){
  Language.LanguagesModel.findOneAndUpdate({'title': lang[0].title}, {
    media: req.body.media,
    title: req.body.title,
    body_1: req.body.body1,
    body_2: req.body.body2,
    body_3: req.body.body3,
    body_4: req.body.body4,
    body_5: req.body.body5,
    body_6: req.body.body6,
    body_7: req.body.body7,
    body_8: req.body.body8,
    body_9: req.body.body9,
    body_10: req.body.body10,
    body_11: req.body.body11,
    body_12: req.body.body12,
    body_13: req.body.body13,
    body_14: req.body.body14,
    body_15: req.body.body15
  }, function(err, docs){
    console.log(err);
  });
  res.redirect('/languagesMenu');
}
