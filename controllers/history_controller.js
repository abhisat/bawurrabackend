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
res.send('Successful');
}
exports.showForm = function (req, res, next) {
  res.render('historyMenuForm');

}
