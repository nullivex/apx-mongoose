var mongoose = require('mongoose')
exports.name = 'mongoose'
exports.description = 'Mongoose initializer'
exports.init = function(apx,fn){
  var host = apx.config.exists('mongoose.host') ? apx.config.get('mongoose.host') : '127.0.0.1'
    , user = apx.config.exists('mongoose.user') ? apx.config.get('mongoose.user') : ''
    , pass = apx.config.exists('mongoose.password') ? apx.config.get('mongoose.password') : ''
    , dsn = 'mongodb://' + host + '/' + apx.config.get('mongoose.name')
  //bootstrap models
  if(apx.config.exists('mongoose.models')){
    apx.models = {}
    apx.loadItems(apx.config.get('mongoose.models'),function(model){
      apx.models[model.name] = model.model
    })
  }
  //connect to mongoose
  mongoose.connect(
    dsn,
    {
      db: {native_parser: true}, //jshint ignore:line
      user: user,
      pass: pass,
      keepAlive: 1
    },
    fn
  )
}
//mongoose instance access
exports.mongoose = mongoose