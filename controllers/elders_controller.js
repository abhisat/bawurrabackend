var Elder = require('../models/eldersMenu')

exports.list = function(req, res, next){
  var eldersList = Elder.ElderModel.find({}, function(err, elders){
    res.render('eldersMenu', { title: 'Elders', elder_List: elders });
  });
}

exports.create_new = function(req, res, next){
  var elder = new Elder.ElderModel({
    title: req.body.title,
    media_1: req.body.media1,
    body: req.body.body,
    media_2: req.body.media2

  });

  elder.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
res.send('Successful');
}
exports.showForm = function (req, res, next) {
  res.render('eldersMenuForm');

}
