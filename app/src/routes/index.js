var Backbone = require('backbone');
var IndexView = require('../views/index_view');
var CategoryView = require('../views/category_view');

var IndexRoute = Backbone.Router.extend({
	routes: {
	    'productos/:category' : 'productsRoute',
		'*actions': 'defaultRoute'  //matches any route
	},

	defaultRoute: function(actions){
		var indexView = new IndexView({el: $("body")});
	},
	productsRoute: function(query){
		var categoryView = new CategoryView({el: $("body"), category: query});
	}
});

module.exports = IndexRoute;
