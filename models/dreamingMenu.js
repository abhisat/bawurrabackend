'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DreamingModelSchema = new Schema({
  menu_title: String,
  title: String,
  media_1: String,
  body: String,
  media_2: String
});

// Compile model from schema
exports.DreamingModel = mongoose.model('DreamingModel', DreamingModelSchema );
