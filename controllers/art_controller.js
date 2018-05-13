var Art = require('../models/artsMenu');
var artCopy;

exports.APICall = function(req, res, next){
  var artJson = Art.ArtModel.find({}).lean().exec((err, arts) => {
    if (err) res.send(err);
    else return(arts);
  });
}

exports.list = function(req, res, next){
  var artsList = Art.ArtModel.find({}, function(err, arts){
    res.render('artMenu', { title: 'Arts', arts_List: arts });
  });
}

exports.error = function(req, res, next) {
  res.send("Error Uploading file.");
}

exports.create_new = function(req, res, next) {
  var new_art = new Art.ArtModel({
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image"
  });

  new_art.save(function(err) {
    if (err) return handleError(err);
  });
  res.redirect('/artsMenu');
}

exports.showForm = function (req, res, next) {
  res.render('artMenuForm');

}

exports.editOrDelete = function(req, res, next){
  if(req.body.option=='edit'){
    Art.ArtModel.find({'title': req.body.title}, function(err, arts){
      artCopy = arts;
      res.render('artMenuUpdate', {title: 'Arts Update', art: arts})
    });
  }
  else if (req.body.option=='delete') {
    Art.ArtModel.remove({'title': req.body.title}, function(err, art){
      res.redirect('/artsMenu');
    });
  }

}

exports.editUpdate = function(req, res, next){
  Art.ArtModel.findOneAndUpdate({'title': artCopy[0].title}, {
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image"
  }, function(err, docs){
    console.log(err);
  });
  res.redirect('/artsMenu');
}
