var backbone = require('backbone');

var SliderView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require('../../views/slider.hbs'),
	render: function(){
		this.$el.html(this.template());
	}
});

module.exports = SliderView;
