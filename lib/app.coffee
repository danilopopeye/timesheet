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
	app.use stylus.middleware
		src: __dirname + '/../public'
		compile: compile
	app.use express.static( __dirname + '/../public')
	app.set 'views', __dirname + '/views'
	app.set 'view engine', 'jade'
	app.use express.logger()
	app.use express.bodyParser()
	app.use express.methodOverride()
	app.use app.router

app.configure 'development', ->
	app.use express.errorHandler
		dumpExceptions: true
		showStack: true

app.configure 'production', ->
	app.use express.errorHandler()

app.get '/', (req, res) ->
	res.render 'index'

app.get '/iframe', (req, res) ->
	res.render 'iframe', layout: false

app.all '/api/:method', (req, res) ->
	res.send status: 'success'

app.listen process.env.PORT
console.log 'Express server listening on port %d in %s mode', app.address().port, app.settings.env
