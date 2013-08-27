
/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'),
	path = require('path'),
	mongoose = require('mongoose'),
	app = express(),
	db,
	mongoose,
	models,
	routes;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

mongoose = require('mongoose');
models = require('./models/models')(mongoose);
routes = require('./routes/employee')(app, models);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/**
 * Database
 */

mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/ExpressExample');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	
});

/**
 * API
 */

app.get('/', function(req, res){
	res.sendfile('views/index.html');
});

/**
 * Kick off!
 */

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
