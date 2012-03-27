express = require 'express'
stylus = require 'stylus'
nib = require 'nib'

app = module.exports = express.createServer()

compile = (str, path) ->
  stylus(str)
    .set('filename', path)
    .set('compress', false)
    .use(nib())

app.configure ->
  app.use app.router
  app.use stylus.middleware
    src: __dirname + '/../public'
    compile: compile
  app.use express.static( __dirname + '/../public')
  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'jade'
  app.use express.logger()
  app.use express.bodyParser()
  app.use express.methodOverride()

app.configure 'development', ->
  app.set 'script', 'main.js'
  app.use express.errorHandler
    dumpExceptions: true
    showStack: true

  # development doesn't use cache
  app.get '/appcache.manifest', (req, res) ->
    res.end ''

app.configure 'production', ->
  app.set 'script', 'production.js'
  app.use express.errorHandler()

app.get '/', (req, res) ->
  res.render 'index',
    script: app.set 'script'

app.listen process.env.PORT
console.log 'Express server listening on port %d in %s mode', app.address().port, app.settings.env
