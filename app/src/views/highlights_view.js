var backbone = require('backbone');

var HighlightsView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require('../../views/highlights.hbs'),
	render: function(){
		this.$el.html(this.template());
	}
});

module.exports = HighlightsView;
