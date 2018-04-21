
var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

var Language = require('../models/languagesMenu');

exports.list = function(req, res, next){
  var languagesList = Language.LanguagesModel.find({}, function(err, language){
    res.render('languagesMenu', { title: 'Languages', languages_List: language });
  });
}
exports.create_new = function(req, res, next){
  console.log(req.body);
  var language = new Language.LanguagesModel({
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

  });

  language.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
res.send('Successful');
}
exports.showForm = function (req, res, next) {
  res.render('languagesMenuForm');

}
