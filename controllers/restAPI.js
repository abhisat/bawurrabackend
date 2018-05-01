var controllerArray = [];
var Promise = require('promise');

var a = require('../controllers/culture_controller');
controllerArray.push(require('../controllers/culture_controller'));
controllerArray.push(require('../controllers/elders_controller'));
controllerArray.push(require('../controllers/history_controller'));
controllerArray.push(require('../controllers/future_controller'));
controllerArray.push(require('../controllers/nations_controller'));
controllerArray.push(require('../controllers/languages_controller'));

exports.serveJSON = function(req, res, next){
  var objects = [];
  var promiseArray = []
res.send(a.APICall());
  // for (var i=0; i<controllerArray.length; i++){
  //
  //   promiseArray.push(new Promise(function(resolve, reject){
  //     controller.APICall();
  //     console.log('here');
  //   }))
  // }
  //
  // Promise.all(promiseArray).then(function(r){
  //   objects.push(r);
  // })
  // .then(function(objects){
  //   res.json(objects);
  // });
}
