var History = require('../models/historyMenu')


exports.list = function(req, res, next){
  var historyList = History.HistoryModel.find({}, function(err, history){
    res.render('historyMenu', { title: 'Histories', history_List: history });
  });
}

exports.create_new = function(req, res, next){
  console.log(req.body);
  var history = new History.HistoryModel({
    title: req.body.title,
    media_1: req.body.media1,
    body: req.body.body,
    media_2: req.body.media2

  });

  history.save(function (err) {
  if (err) return handleError(err);
  // saved!
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
    media_1: req.body.media1,
    body: req.body.body,
    media_2: req.body.media2
  }, function(err, docs){
    console.log(err);
  });
res.redirect('/historyMenu');
}
