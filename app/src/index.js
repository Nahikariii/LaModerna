var Backbone = require("backbone"),
	$ = require("jquery-browserify");
Backbone.$ = $;

require("./helpers.js");

$(document).ready(function () {
	var IndexRoute = require("./routes/index");
	new IndexRoute;
	Backbone.history.start();
});
