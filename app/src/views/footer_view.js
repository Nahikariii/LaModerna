var backbone = require("backbone");

var FooterView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require("../../views/footer.hbs"),
	render: function(){
		this.$el.html(this.template());
	}
});

module.exports = FooterView;
