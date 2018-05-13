var controllerArray = [];
var Promise = require('promise');

var a = require('../controllers/culture_controller');
controllerArray.push(require('../controllers/culture_controller'));
controllerArray.push(require('../controllers/elders_controller'));
controllerArray.push(require('../controllers/history_controller'));
controllerArray.push(require('../controllers/future_controller'));
controllerArray.push(require('../controllers/nations_controller'));
controllerArray.push(require('../controllers/languages_controller'));

exports.serveJSON = function(req, res, next) {
  var objects = [];
  var promiseArray = []
  var responses = [];
  promise = new Promise(function(resolve, reject) {
    var response;
    a.APICall(req, response, res, function() {
      resolve(response)
      console.log(response)
    })
  });
  Promise.resolve(promise).then(function(r) {
    console.log(r);
  });
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
