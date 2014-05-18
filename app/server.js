var express = require('express'),
	browserify = require('browserify'),
	stylus = require('stylus'),
	express_handlebars = require('express3-handlebars');

var app = express();

app.configure(function (){
	app.set('views', __dirname + '/views');
	app.engine('handlebars', express_handlebars({defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'}));
	app.set('view engine', 'handlebars');
	app.use(stylus.middleware({
		src: __dirname + '/assets',
		dest: __dirname + '/public',
		debug: true
	}));
	app.use(express.static(__dirname + '/public'));
});

app.get('/application.js', function (request, response){
	var bundle = browserify(__dirname + '/src/index.js');
	bundle.transform(require('hbsfy'));
	bundle.bundle(function(err, src) {
        if (err){
            console.error(err);
            response.writeHead(405);
			response.setHeader("Access-Control-Allow-Origin", "*.google.com");
            return response.end(err);
        }
        response.writeHead(200, {'Content-type':'text/javascript'});
		response.end(src);
	});
});

app.get('/', function (request, response){
	response.render('homepage');
});
app.listen(3000);
