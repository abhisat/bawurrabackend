var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/config/config.json')[env];
var mongoose = require('mongoose');
var mongodb = config.database;
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

module.exports = db;
