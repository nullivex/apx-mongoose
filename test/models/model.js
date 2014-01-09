'use strict';
var mongoose = require('mongoose')
  , schema

schema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  }
})

exports.name = 'model'
exports.description = 'Testing model'
exports.schema = schema
exports.model = mongoose.model('Test',schema)