var Dreaming = require('../models/dreamingMenu');
var dream;

exports.APICall = function(req, res, next){
  var dreamingJson = Dreaming.DreamingModel.find({}).lean().exec((err, dreams) => {
    if (err) res.send(err);
    else res.json(dreams);
  });
}

exports.list = function(req, res, next){
  var DreamingList = Dreaming.DreamingModel.find({}, function(err, dreams){
    res.render('dreamingMenu', { title: 'Dreams', dream_List: dreams });
  });
}

exports.error = function(req, res, next) {
  res.send("Error Uploading file.");
}

exports.create_new = function(req, res, next) {
  var dreaming = new Dreaming.DreamingModel({
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image",
    video: req.body.video
  });

  dreaming.save(function(err) {
    if (err) return handleError(err);
  });
  res.redirect('/dreamingMenu');
}

exports.showForm = function (req, res, next) {
  res.render('dreamingMenuForm');

}

exports.editOrDelete = function(req, res, next){
  if(req.body.option=='edit'){
    Dreaming.DreamingModel.find({'title': req.body.title}, function(err, dreams){
      dream = dreams;
      res.render('dreamingMenuUpdate', {title: 'Dream Update', dreams: dreams})
    });
  }
  else if (req.body.option=='delete') {
    Dreaming.DreamingModel.remove({'title': req.body.title}, function(err, dreams){
      res.redirect('/dreamingMenu');
    });
  }

}

exports.editUpdate = function(req, res, next){
  Dreaming.DreamingModel.findOneAndUpdate({'title': dream[0].title}, {
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image",
    video: req.body.video
  }, function(err, docs){
    console.log(err);
  });
  res.redirect('/dreamingMenu');
}
