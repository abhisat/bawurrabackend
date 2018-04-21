var mongoose = require('mongoose');
var mongodb = 'mongodb://localhost/bawurradb';
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

module.exports = db;
