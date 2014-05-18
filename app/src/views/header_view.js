var backbone = require("backbone");
var MenuView = require("./menu_view");

var HeaderView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require("../../views/header.hbs"),
	render: function(){
        this.$el.html(this.template());
		var menu_view = new MenuView({el: $("#menu")});
	}
});

module.exports = HeaderView;
