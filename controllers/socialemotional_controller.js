var SocialEmotional = require('../models/socialEmotionalMenu');
var socialEmotionalCopy;

exports.APICall = function(req, res, next){
  var socialEmotionalJson = SocialEmotional.SocialEmotionalModel.find({}).lean().exec((err, socialEmotional) => {
    if (err) res.send(err);
    else res.json(socialEmotional);
  });
}

exports.list = function(req, res, next){
  var socialEmotionalsList = SocialEmotional.SocialEmotionalModel.find({}, function(err, socialEmotionals){
    res.render('socialEmotionalMenu', { title: 'Social and Emotional', socialEmotional_List: socialEmotionals });
  });
}

exports.error = function(req, res, next) {
  res.send("Error Uploading file.");
}

exports.create_new = function(req, res, next) {
  var socialEmotional = new SocialEmotional.SocialEmotionalModel({
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image"
  });

  socialEmotional.save(function(err) {
    if (err) return handleError(err);
  });
  res.redirect('/socialEmotionalMenu');
}

exports.showForm = function (req, res, next) {
  res.render('socialEmotionalMenuForm');

}

exports.editOrDelete = function(req, res, next){
  if(req.body.option=='edit'){
    SocialEmotional.SocialEmotionalModel.find({'title': req.body.title}, function(err, socialEmotionals){
      socialEmotionalCopy = socialEmotionals;
      res.render('socialEmotionalMenuUpdate', {title: 'Social and Emotional Update', socialEmotional_List: socialEmotionals})
    });
  }
  else if (req.body.option=='delete') {
    SocialEmotional.SocialEmotionalModel.remove({'title': req.body.title}, function(err, socialEmotionals){
      res.redirect('/socialEmotionalMenu');
    });
  }

}

exports.editUpdate = function(req, res, next){
  SocialEmotional.SocialEmotionalModel.findOneAndUpdate({'title': socialEmotionalCopy[0].title}, {
    title: req.body.title,
    media_1: typeof req.files.media1 !== 'undefined' ? req.files.media1[0].cloudStoragePublicUrl : "No Image",
    body: req.body.body,
    media_2: typeof req.files.media2 !== 'undefined' ? req.files.media2[0].cloudStoragePublicUrl : "No Image",
  }, function(err, docs){
    console.log(err);
  });
  res.redirect('/socialEmotionalMenu');
}
