var backbone = require("backbone");

var MenuView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require("../../views/menu.hbs"),
	render: function(){
		this.$el.html(this.template());
	}
});

module.exports = MenuView;
