var usernamev = 'bawurra';
var passwordv = 'bawurra';
var loggedin = false;

module.exports.use = function(username, password){
  if (!(username == usernamev)) { console.log('Wrong user'); return false; }
  if (!(password == passwordv)) { console.log('Wrong password'); return false; }

  loggedin = true;
  return true;
    };

module.exports.loggedin = function(){
  if(loggedin) {return true}
  return false;
}

module.exports.logout = function(){
  loggedin = false;
}
