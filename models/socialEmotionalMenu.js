'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SocialEmotionalModelSchema = new Schema({
  menu_title: String,
  title: String,
  media_1: String,
  body: String,
  media_2: String,
  video: String
});

// Compile model from schema
exports.SocialEmotionalModel = mongoose.model('SocialEmotionalModel', SocialEmotionalModelSchema );
