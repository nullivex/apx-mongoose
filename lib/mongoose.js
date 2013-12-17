exports.name = 'mongoose'
exports.description = 'Mongoose initializer'
exports.init = function(apx,fn){
  var mongoose = require('mongoose')
    , host = apx.config.has('db.host') ? apx.config.get('db.host') : '127.0.0.1'
    , user = apx.config.has('db.user') ? apx.config.get('db.user') : ''
    , pass = apx.config.has('db.password') ? apx.config.get('db.password') : ''
    , dsn = 'mongodb://' + host + '/' + apx.config.get('db.name')
  mongoose.connect(dsn,{
    db: {native_parser: true}, //jshint ignore:line
    user: user,
    pass: pass
  })
  //bootstrap models
  if(apx.config.has('models')){
    apx.models = {}
    apx.loadItems(apx.config.get('models'),function(model){
      apx.models[model.name] = model.model
    })
  }
  //fire callback
  if('function' === typeof fn) fn(apx)
}