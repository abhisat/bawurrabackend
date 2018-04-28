var Culture = require('../models/cultureMenu');
var media = require('../media.js');
var Promise = require('promise');
var cul;

exports.list = function(req, res, next){
  var cultureList = Culture.CultureModel.find({}, function(err, culture){
    res.render('cultureMenu', { title: 'Cultures', culture_List: culture });
  });
}

exports.create_new = function(req, res, next){
  console.log(req.files);
var culture = new Culture.CultureModel({
  title: req.body.title,
  //media_1: req.files.media1[0].cloudStoragePublicUrl,
  body: req.body.body,
  //media_2: req.files.media2[0].cloudStoragePublicUrl
});

culture.save(function (err) {
if (err) return handleError(err);
});
res.redirect('/cultureMenu');
}
//, function(callback){
  //   console.log(callback);
  // });
//   .then(function (req, res, next){
//     if (req.file && req.file.cloudStoragePublicUrl) {
//       req.body.media = req.file.cloudStoragePublicUrl;
//     }
//
//     // Save the data to the database.
//       console.log('here');
//   var culture = new Culture.CultureModel({
//     title: req.body.title,
//     media_1: req.body.media1,
//     body: req.body.body,
//     media_2: req.body.media2
//   });
//
//   culture.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// })
  //});

    // Was an image uploaded? If so, we'll use its public URL
    // in cloud storage.

exports.showForm = function (req, res, next) {
  res.render('cultureMenuForm');

}

exports.editUpdate = function(req, res, next){
  Culture.CultureModel.findOneAndUpdate({'title': cul[0].title}, {title: req.body.title,
  media_1: req.body.media1,
  body: req.body.body,
  media_2: req.body.media2}, function(err, docs){
    console.log(err);
  });

  res.redirect('/cultureMenu');
}

exports.editOrDelete = function(req, res, next){
  if (req.body.option=='edit'){
    Culture.CultureModel.find({'title': req.body.title}, function(err, culture){
      cul = culture;
      res.render('cultureMenuUpdate', {title: 'Culture Update', culture: culture});
  });
}
  else if(req.body.option=='delete'){
    Culture.CultureModel.remove({'title': req.body.title}, function(err, culture){
      res.redirect('/cultureMenu');
    });
  }
}
