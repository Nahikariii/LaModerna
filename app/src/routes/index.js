var Backbone = require('backbone');
var IndexView = require('../views/index_view');

var IndexRoute = Backbone.Router.extend({
	routes: {
		'*actions': 'defaultRoute'  //matches any route
	},

	defaultRoute: function(actions){
		var index_view = new IndexView({el: $("body")});
	}

});

module.exports = IndexRoute;
