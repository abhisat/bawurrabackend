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
router.get('/eldersMenu', elders_controller.list);
router.get('/historyMenu', history_controller.list);
router.get('/futureMenu', future_controller.list);
router.get('/nationsMenu', nations_controller.list);
router.get('/languagesMenu', languages_controller.list);
module.exports = router;
