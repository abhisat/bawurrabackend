var Future = require('../models/futureMenu')

exports.list = function(req, res, next){
  var futuresList = Future.FutureModel.find({}, function(err, futures){
    res.render('futureMenu', { title: 'Futures', future_List: futures });
  });
}

exports.create_new = function(req, res, next){
  var future = new Future.FutureModel({
    title: req.body.title,
    media_1: req.body.media1,
    body: req.body.body,
    media_2: req.body.media2

  });

  future.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
res.send('Successful');
}
exports.showForm = function (req, res, next) {
  res.render('futureMenuForm');

}
