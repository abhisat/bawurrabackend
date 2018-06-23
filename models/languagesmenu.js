'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LanguagesModelSchema = new Schema({
  media: String,
  title: String,
  body_1: String,
  body_2: String,
  body_3: String,
  body_4: String,
  body_5: String,
  body_6: String,
  body_7: String,
  body_8: String,
  body_9: String,
  body_10: String,
  body_11: String,
  body_12: String,
  body_13: String,
  body_14: String,
  body_15: String,
  body_16: String,
  video: String
});

// Compile model from schema
exports.LanguagesModel = mongoose.model('LanguagesModel', LanguagesModelSchema );
