'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ElderModelSchema = new Schema({
  title: String,
  media_1: String,
  body: String,
  media_2: String,
  video: String
});

// Compile model from schema
exports.ElderModel = mongoose.model('ElderModel', ElderModelSchema );
