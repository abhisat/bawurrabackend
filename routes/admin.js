var express = require('express');
var culture_controller = require('../controllers/culture_controller');
var elders_controller = require('../controllers/elders_controller');
var history_controller = require('../controllers/history_controller');
var future_controller = require('../controllers/future_controller');
var nations_controller = require('../controllers/nations_controller');
var languages_controller = require('../controllers/languages_controller');
var restAPI = require('../controllers/restAPI');
var authenticate = require('../authenticate');
var media = require('../media.js');
var router = express.Router();
var mediaFieldsSubmenu = [{name: "media1", maxCount: 1}, {name: "media2", maxCount: 1}];
var mediaFieldsLanguage = [{name: "media", maxCount: 1}];

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

router.get('/cultureMenu', culture_controller.list);
router.get('/cultureMenu/new', culture_controller.showForm);
router.post('/cultureMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, culture_controller.create_new);
router.post('/cultureMenu/editOrDelete', culture_controller.editOrDelete);
router.post('/cultureMenu/editUpdate', culture_controller.editUpdate);

router.get('/eldersMenu', elders_controller.list);
router.get('/eldersMenu/new', elders_controller.showForm);
router.post('/eldersMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, elders_controller.create_new);
router.post('/eldersMenu/editOrDelete', elders_controller.editOrDelete);
router.post('/eldersMenu/editUpdate', elders_controller.editUpdate);

router.get('/historyMenu', history_controller.list);
router.get('/historyMenu/new', history_controller.showForm);
router.post('/historyMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, history_controller.create_new)
router.post('/historyMenu/editOrDelete', history_controller.editOrDelete);
router.post('/historyMenu/editUpdate', history_controller.editUpdate);

router.get('/futureMenu', future_controller.list);
router.get('/futureMenu/new', future_controller.showForm);
router.post('/futureMenu/new', media.multer.fields(mediaFieldsSubmenu), media.sendUploadToGCS, future_controller.create_new);
router.post('/futureMenu/editOrDelete', future_controller.editOrDelete);
router.post('/futureMenu/editUpdate', future_controller.editUpdate);


router.get('/nationsMenu', nations_controller.list);
router.get('/nationsMenu/new', nations_controller.showForm);
router.post('/nationsMenu/new', nations_controller.create_new);
router.post('/nationsMenu/editOrDelete', nations_controller.editOrDelete);
router.post('/nationsMenu/editUpdate', nations_controller.editUpdate);

router.get('/languagesMenu', languages_controller.list);
router.get('/languagesMenu/new', languages_controller.showForm);
router.post('/languagesMenu/new', media.multer.fields(mediaFieldsLanguage), media.sendUploadToGCS, languages_controller.create_new);
router.post('/languagesMenu/editOrDelete', languages_controller.editOrDelete);
router.post('/languagesMenu/editUpdate', languages_controller.editUpdate);

module.exports = router;
