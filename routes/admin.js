var express = require('express');
var culture_controller = require('../controllers/culture_controller');
var elders_controller = require('../controllers/elders_controller');
var history_controller = require('../controllers/history_controller');
var future_controller = require('../controllers/future_controller');
var nations_controller = require('../controllers/nations_controller');
var languages_controller = require('../controllers/languages_controller');
var authenticate = require('../authenticate');
var router = express.Router();

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

router.get('/logout',
  function(req, res){
    authenticate.logout();
    res.redirect('/');
  });
router.get('/cultureMenu', culture_controller.list);
router.get('/cultureMenu/new', culture_controller.showForm);
router.post('/cultureMenu/new', culture_controller.create_new);

router.get('/eldersMenu', elders_controller.list);
router.get('/eldersMenu/new', elders_controller.showForm);
router.post('/eldersMenu/new', elders_controller.create_new);

router.get('/historyMenu', history_controller.list);
router.get('/historyMenu/new', history_controller.showForm);
router.post('/historyMenu/new', history_controller.create_new)

router.get('/futureMenu', future_controller.list);
router.get('/futureMenu/new', future_controller.showForm);
router.post('/futureMenu/new', future_controller.create_new);

router.get('/nationsMenu', nations_controller.list);
router.get('/nationsMenu/new', nations_controller.showForm);
router.post('/nationsMenu/new', nations_controller.create_new);

router.get('/languagesMenu', languages_controller.list);
router.get('/languagesMenu/new', languages_controller.showForm);
router.post('/languagesMenu/new', languages_controller.create_new);
module.exports = router;
