var Culture = require('../models/cultureMenu');
var media = require('../media.js');
var Promise = require('promise');
var mediaFields = [{
  name: "media1",
  maxCount: 1
}, {
  name: "media2",
  maxCount: 1
}];
var cul;

exports.list = function(req, res, next) {
  var cultureList = Culture.CultureModel.find({}, function(err, culture) {
    res.render('cultureMenu', {
      title: 'Cultures',
      culture_List: culture
    });
  });
}

exports.error = function(req, res, next) {
  res.send("Error Uploading file.");
}

exports.create_new = function(req, res, next) {
  var culture = new Culture.CultureModel({
    title: req.body.title,
    media_1: req.files.media1[0].cloudStoragePublicUrl,
    body: req.body.body,
    media_2: req.files.media2[0].cloudStoragePublicUrl
  });

  culture.save(function(err) {
    if (err) return handleError(err);
  });
  res.redirect('/cultureMenu');
}

exports.showForm = function(req, res, next) {
  res.render('cultureMenuForm');
}

exports.editUpdate = function(req, res, next) {
  Culture.CultureModel.findOneAndUpdate({
    'title': cul[0].title
  }, {
    title: req.body.title,
    media_1: req.body.media1,
    body: req.body.body,
    media_2: req.body.media2
  }, function(err, docs) {
    console.log(err);
  });

  res.redirect('/cultureMenu');
}

exports.editOrDelete = function(req, res, next) {
  if (req.body.option == 'edit') {
    Culture.CultureModel.find({
      'title': req.body.title
    }, function(err, culture) {
      cul = culture;
      res.render('cultureMenuUpdate', {
        title: 'Culture Update',
        culture: culture
      });
    });
  } else if (req.body.option == 'delete') {
    Culture.CultureModel.remove({
      'title': req.body.title
    }, function(err, culture) {
      res.redirect('/cultureMenu');
    });
  }
}
