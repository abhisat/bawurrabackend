var History = require('../models/historyMenu')

exports.APICall = function(req, res, next){
  var historyJson = History.HistoryModel.find({}).lean().exec((err, history) => {
    if (err) res.send(err);
    else res.json(history);
  });
}

exports.list = function(req, res, next){
  var historyList = History.HistoryModel.find({}, function(err, history){
    res.render('historyMenu', { title: 'Histories', history_List: history });
  });
}

exports.error = function(req, res, next) {
  res.send("Error Uploading file.");
}

exports.create_new = function(req, res, next) {
  var history = new History.HistoryModel({
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image",
    video: req.body.video
  });

  history.save(function(err) {
    if (err) return handleError(err);
  });
  res.redirect('/historyMenu');
}

exports.showForm = function (req, res, next) {
  res.render('historyMenuForm');

}

exports.editOrDelete = function(req, res, next) {
  if(req.body.option=='edit'){
    History.HistoryModel.find({'title': req.body.title}, function(err, history){
      hist = history;
      res.render('historyMenuUpdate', {title: 'History Update', history: history});
    });
  }
  else if (req.body.option=='delete') {
    History.HistoryModel.remove({'title': req.body.title}, function(err, history){
      res.redirect('/historyMenu');
    });
  }
}

exports.editUpdate = function(req, res, next){
  History.HistoryModel.findOneAndUpdate({'title': hist[0].title}, {
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image",
    video: req.body.video
  }, function(err, docs){
    console.log(err);
  });
res.redirect('/historyMenu');
}
