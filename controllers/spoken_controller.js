
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
exports.create_new = function(req, res, next) {
  var spoken = new Spoken.SpokenModel({
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image",
    video: req.body.video
  });

  spoken.save(function(err) {
    if (err) return handleError(err);
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

exports.editUpdate = function(req, res, next) {
  Spoken.SpokenModel.findOneAndUpdate({
    'title': cul[0].title
  }, {
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image",
    video: req.body.video
  }, function(err, docs) {
    console.log(err);
  });

  res.redirect('/spokenMenu');
}
