exports.name = 'mongoose'
exports.description = 'Mongoose initializer'
exports.init = function(apx,fn){
  var mongoose = require('mongoose')
    , host = apx.config.has('mongoose.host') ? apx.config.get('mongoose.host') : '127.0.0.1'
    , user = apx.config.has('mongoose.user') ? apx.config.get('mongoose.user') : ''
    , pass = apx.config.has('mongoose.password') ? apx.config.get('mongoose.password') : ''
    , dsn = 'mongodb://' + host + '/' + apx.config.get('mongoose.name')
  mongoose.connect(dsn,{
    db: {native_parser: true}, //jshint ignore:line
    user: user,
    pass: pass
  })
  //bootstrap models
  if(apx.config.has('mongoose.models')){
    apx.models = {}
    apx.loadItems(apx.config.get('mongoose.models'),function(model){
      apx.models[model.name] = model.model
    })
  }
  //fire callback
  if('function' === typeof fn) fn(apx)
}