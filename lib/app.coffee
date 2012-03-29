express = require 'express'
stylus = require 'stylus'
nib = require 'nib'
fs = require 'fs'

app = module.exports = express.createServer()

compile = (str, path) ->
  stylus(str)
    .set('filename', path)
    .set('compress', false)
    .use(nib())

app.configure ->
  app.use app.router
  app.use stylus.middleware
    src: "#{__dirname}/../public"
    compile: compile
  app.use express.favicon "#{__dirname}/../public/favicon.ico"
  app.use express.static "#{__dirname}/../public"
  app.set 'views', "#{__dirname}/views"
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

tests = (req, res, next) ->
  fs.readdir "public/tests", (err, files) ->
    next( new Error err ) if err isnt null
    req.tests = ("tests/#{file}" for file in files when /spec\.js$/.test file)
    next()

app.get '/', (req, res) ->
  res.render 'index',
    script: app.set 'script'

app.get '/coverage', (req, res) ->
  res.redirect '/jscoverage/?/tests'

app.get '/tests', tests, (req, res) ->
  res.render 'tests',
    layout: false,
    files: req.tests

app.listen process.env.PORT
console.log 'Express server listening on port %d in %s mode', app.address().port, app.settings.env
