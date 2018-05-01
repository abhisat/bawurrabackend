var Elder = require('../models/eldersMenu')
var eld;


exports.APICall = function(req, res, next){
  var elderJson = Elder.ElderModel.find({}).lean().exec((err, elder) => {
    if (err) res.send(err);
    else return(elder);
  });
}

exports.list = function(req, res, next) {
  var eldersList = Elder.ElderModel.find({}, function(err, elders) {
    res.render('eldersMenu', {
      title: 'Elders',
      elder_List: elders
    });
  });
}

exports.error = function(req, res, next) {
  res.send("Error Uploading file.");
}

exports.create_new = function(req, res, next) {
  var elder = new Elder.ElderModel({
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image"
  });

  elder.save(function(err) {
    if (err) return handleError(err);
  });
  res.redirect('/eldersMenu');
}
exports.showForm = function(req, res, next) {
  res.render('eldersMenuForm');

}

exports.editOrDelete = function(req, res, next) {
  if (req.body.option == 'edit') {
    Elder.ElderModel.find({
      'title': req.body.title
    }, function(err, elder) {
      eld = elder;
      res.render('eldersMenuUpdate', {
        title: 'Elder Update',
        elder: elder
      });
    });
  } else if (req.body.option == 'delete') {
    Elder.ElderModel.remove({
      'title': req.body.title
    }, function(err, elder) {
      res.redirect('/eldersMenu');
    });
  }

}

exports.editUpdate = function(req, res, next) {
  Elder.ElderModel.findOneAndUpdate({
    'title': eld[0].title
  }, {
    title: req.body.title,
    media_1: req.body.media1,
    body: req.body.body,
    media_2: req.body.media2
  }, function(err, docs) {
    console.log(err);
  });

  res.redirect('/eldersMenu');
}
