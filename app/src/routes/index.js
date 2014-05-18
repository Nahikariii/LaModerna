var Backbone = require("backbone");
var IndexView = require("../views/index_view");
var CategoryView = require("../views/category_view");
var FindUsView = require("../views/findus_view");
var HistoryView = require("../views/history_view");
var PizzaView = require("../views/pizza_view");

var IndexRoute = Backbone.Router.extend({
	routes: {
	    "productos/:category" : "productsRoute",
	    "tiendas" : "findUsRoute",
		"historia": "historyRoute",
		"pizza": "pizzaRoute",
		"*actions": "defaultRoute"  //matches any route
	},

	defaultRoute: function(actions){
		var indexView = new IndexView({el: $("body")});
	},
	productsRoute: function(query){
		var categoryView = new CategoryView({el: $("body"), category: query});
	},
	findUsRoute: function(query){
		var categoryView = new FindUsView({el: $("body")});
	},
	historyRoute: function(query){
		var historyView = new HistoryView({el: $("body")});
	},
	pizzaRoute: function(query){
		var pizzaView = new PizzaView({el: $("body")});
	}


});

module.exports = IndexRoute;
