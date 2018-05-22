var Future = require('../models/futureMenu');
var fut;

exports.APICall = function(req, res, next){
  var elderJson = Future.FutureModel.find({}).lean().exec((err, future) => {
    if (err) res.send(err);
    else res.json(future);
  });
}

exports.list = function(req, res, next){
  var futuresList = Future.FutureModel.find({}, function(err, futures){
    res.render('futureMenu', { title: 'Futures', future_List: futures });
  });
}

exports.error = function(req, res, next) {
  res.send("Error Uploading file.");
}

exports.create_new = function(req, res, next) {
  var future = new Future.FutureModel({
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image"
  });

  future.save(function(err) {
    if (err) return handleError(err);
  });
  res.redirect('/futureMenu');
}

exports.showForm = function (req, res, next) {
  res.render('futureMenuForm');

}

exports.editOrDelete = function(req, res, next){
  if(req.body.option=='edit'){
    Future.FutureModel.find({'title': req.body.title}, function(err, future){
      fut = future;
      res.render('futureMenuUpdate', {title: 'Future Update', future: future})
    });
  }
  else if (req.body.option=='delete') {
    Future.FutureModel.remove({'title': req.body.title}, function(err, future){
      res.redirect('/futureMenu');
    });
  }

}

exports.editUpdate = function(req, res, next){
  Future.FutureModel.findOneAndUpdate({'title': fut[0].title}, {
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image",
  }, function(err, docs){
    console.log(err);
  });
  res.redirect('/futureMenu');
}
