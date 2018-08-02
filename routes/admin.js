var express = require('express');
var culture_controller = require('../controllers/culture_controller');
var elders_controller = require('../controllers/elders_controller');
var history_controller = require('../controllers/history_controller');
var future_controller = require('../controllers/future_controller');
var nations_controller = require('../controllers/nations_controller');
var languages_controller = require('../controllers/languages_controller');
var socialemotional_controller = require('../controllers/socialemotional_controller');
var art_controller = require('../controllers/art_controller');
var dreaming_controller = require('../controllers/dreaming_controller');
var spoken_controller = require('../controllers/spoken_controller');
var restAPI = require('../controllers/restAPI');
var authenticate = require('../authenticate');
var media = require('../media.js');
var router = express.Router();
var mediaFieldsSubmenu = [{name: "media1", maxCount: 1}, {name: "media2", maxCount: 1}];
var mediaFieldsLanguage = [{name: "media", maxCount: 1}, {name: "icon", maxCount: 1}];
var mediaFieldsNation = [{name: "icon", maxCount: 1}];


/* GET admin page. */

router.get('/',
  function(req, res) {
    if(authenticate.loggedin()){
      res.render('mainMenu');
    }
      res.render('login');
  });

router.post('/',function(req, res){
  if(authenticate.use(req.body.username, req.body.password)){
    res.redirect('/');
  }
    res.redirect('/');
  });

router.get('/logout', function(req, res){
    authenticate.logout();
    res.redirect('/');
  }
);
router.get('/error', function(req, res){
  res.send("Error Uploading file.")
});

router.get('/serveJson', restAPI.serveJSON);

router.get('/servearts', art_controller.APICall);
router.get('/serveculture', culture_controller.APICall);
router.get('/servedreams', dreaming_controller.APICall);
router.get('/serveelders', elders_controller.APICall);
router.get('/servefuture', future_controller.APICall);
router.get('/servehistory', history_controller.APICall);
router.get('/servelanguages', languages_controller.APICall);
router.get('/servenations', nations_controller.APICall);
router.get('/servesocialemotional', socialemotional_controller.APICall);
router.get('/servespoken', spoken_controller.APICall);

router.get('/cultureMenu', culture_controller.list);
router.get('/cultureMenu/new', culture_controller.showForm);
router.post('/cultureMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, culture_controller.create_new);
router.post('/cultureMenu/editOrDelete', culture_controller.editOrDelete);
router.post('/cultureMenu/editUpdate', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, culture_controller.editUpdate);

router.get('/eldersMenu', elders_controller.list);
router.get('/eldersMenu/new', elders_controller.showForm);
router.post('/eldersMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, elders_controller.create_new);
router.post('/eldersMenu/editOrDelete', elders_controller.editOrDelete);
router.post('/eldersMenu/editUpdate', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, elders_controller.editUpdate);

router.get('/historyMenu', history_controller.list);
router.get('/historyMenu/new', history_controller.showForm);
router.post('/historyMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, history_controller.create_new)
router.post('/historyMenu/editOrDelete', history_controller.editOrDelete);
router.post('/historyMenu/editUpdate', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, history_controller.editUpdate);

router.get('/futureMenu', future_controller.list);
router.get('/futureMenu/new', future_controller.showForm);
router.post('/futureMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, future_controller.create_new);
router.post('/futureMenu/editOrDelete', future_controller.editOrDelete);
router.post('/futureMenu/editUpdate', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, future_controller.editUpdate);

router.get('/nationsMenu', nations_controller.list);
router.get('/nationsMenu/new', nations_controller.showForm);
router.post('/nationsMenu/new', media.multer.fields(mediaFieldsNation), media.sendUploadToGCS, nations_controller.create_new);
router.post('/nationsMenu/editOrDelete', nations_controller.editOrDelete);
router.post('/nationsMenu/editUpdate', media.multer.fields(mediaFieldsNation), media.sendUploadToGCS, nations_controller.editUpdate);

router.get('/languagesMenu', languages_controller.list);
router.get('/languagesMenu/new', languages_controller.showForm);
router.post('/languagesMenu/new', media.multer.fields(mediaFieldsLanguage), media.sendUploadToGCS, languages_controller.create_new);
router.post('/languagesMenu/editOrDelete', languages_controller.editOrDelete);
router.post('/languagesMenu/editUpdate', media.multer.fields(mediaFieldsLanguage), media.sendUploadToGCS, languages_controller.editUpdate);

router.get('/socialEmotionalMenu', socialemotional_controller.list);
router.get('/socialEmotionalMenu/new', socialemotional_controller.showForm);
router.post('/socialEmotionalMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, socialemotional_controller.create_new);
router.post('/socialEmotionalMenu/editOrDelete', socialemotional_controller.editOrDelete);
router.post('/socialEmotionalMenu/editUpdate', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, socialemotional_controller.editUpdate);

router.get('/artsMenu', art_controller.list);
router.get('/artsMenu/new', art_controller.showForm);
router.post('/artsMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, art_controller.create_new);
router.post('/artsMenu/editOrDelete', art_controller.editOrDelete);
router.post('/artsMenu/editUpdate', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, art_controller.editUpdate);

router.get('/dreamingMenu', dreaming_controller.list);
router.get('/dreamingMenu/new', dreaming_controller.showForm);
router.post('/dreamingMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, dreaming_controller.create_new);
router.post('/dreamingMenu/editOrDelete', dreaming_controller.editOrDelete);
router.post('/dreamingMenu/editUpdate', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, dreaming_controller.editUpdate);

router.get('/spokenMenu', spoken_controller.list);
router.get('/spokenMenu/new', spoken_controller.showForm);
router.post('/spokenMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, spoken_controller.create_new);
router.post('/spokenMenu/editOrDelete', spoken_controller.editOrDelete);
router.post('/spokenMenu/editUpdate', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, spoken_controller.editUpdate);

module.exports = router;
