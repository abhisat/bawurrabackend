var Culture = require('../models/cultureMenu')

exports.list = function(req, res, next){
  var cultureList = Culture.CultureModel.find({}, function(err, culture){
    res.render('cultureMenu', { title: 'Cultures', culture_List: culture });
  });
}

exports.create_new = function(req, res, next){
  var culture = new Culture.CultureModel({
    title: req.body.title,
    media_1: req.body.media1,
    body: req.body.body,
    media_2: req.body.media2
  });

  culture.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
res.send('Successful');
}
exports.showForm = function (req, res, next) {
  res.render('cultureMenuForm');

}
