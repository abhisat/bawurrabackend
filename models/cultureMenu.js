'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CultureModelSchema = new Schema({
  menu_title: String,
  title: String,
  media_1: String,
  body: String,
  media_2: String
});

// Compile model from schema
exports.CultureModel = mongoose.model('CultureModel', CultureModelSchema );
