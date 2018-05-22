
var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

var Spoken = require('../models/spokenMenu');
var spokenCopy;

exports.APICall = function(req, res, next){
  var spokenJson = Spoken.SpokenModel.find({}).lean().exec((err, spoken) => {
    if (err) res.send(err);
    else res.json(spoken);
  });
}

exports.list = function(req, res, next){
  var spokenList = Spoken.SpokenModel.find({}, function(err, spokens){
    res.render('spokenMenu', { title: 'Spoken', spoken_List: spokens });
  });
}
exports.create_new = function(req, res, next){

  var new_spoken = new Spoken.SpokenModel({
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

  new_spoken.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
res.redirect('/spokenMenu');
}

exports.showForm = function (req, res, next) {
  res.render('spokenMenuForm');

}

exports.editOrDelete = function(req, res, next){
  if(req.body.option=='edit'){
    Spoken.SpokenModel.find({'title': req.body.title}, function(err, spokens){
      spokenCopy = spokens;
      res.render('spokenMenuUpdate', {title: 'Spoken Update', spoken_List: spokens});
    });
  }
  else if (req.body.option=='delete') {
    Spoken.SpokenModel.remove({'title': req.body.title}, function(err, spoken){
      res.redirect('/spokenMenu');
    });
  }
}

exports.editUpdate = function(req, res, next){
  Spoken.SpokenModel.findOneAndUpdate({'title': spokenCopy[0].title}, {
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
  }, function(err, docs){
    console.log(err);
  });
  res.redirect('/spokenMenu');
}
