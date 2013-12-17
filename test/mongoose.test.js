describe('InitializerMongoose',function(){
  var mongoose = require('mongoose')
    , Apx = require('apx')
    , apx
  before(function(done){
    apx = new Apx({
      testing: true,
      cwd: __dirname,
      models: 'models/*.js',
      db: {
        name: 'apx-mongoose-init-test'
      },
      onReady: function(){done()}
    })
  })
  afterEach(function(done){
    mongoose.disconnect(done)
  })
  it('should connect to mongoose',function(done){
    var init = require('../lib/mongoose')
    init.init(apx,function(){
      expect(mongoose.connection.readyState).to.equal(2)
      done()
    })
  })
  it('should load models',function(done){
    var init = require('../lib/mongoose')
    init.init(apx,function(){
      expect(Object.keys(apx.models).length).to.equal(1)
      done()
    })
  })
})