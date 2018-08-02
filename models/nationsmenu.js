'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NationsModelSchema = new Schema({
  title: String,
  subtitle: String,
  body: String,
  video: String,
  icon: String
});

// Compile model from schema
exports.NationsModel = mongoose.model('NationsModel', NationsModelSchema );
