console.log("The sparkly code princess");

var Backbone = require('backbone'),
	$ = require('jquery-browserify');
Backbone.$ = $;

$(document).ready(function () {
	var IndexRoute = require('./routes/index');
	new IndexRoute;
	Backbone.history.start();
});
