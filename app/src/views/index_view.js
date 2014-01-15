var backbone = require('backbone');
var MenuView = require('./menu_view');
var SliderView = require('./slider_view');
var HighlightsView = require('./highlights_view');

var IndexView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require('../../views/index.hbs'),
	render: function(){
        this.$el.html(this.template());
		var menu_view = new MenuView({el: $("#menu")});
        var slider_view = new SliderView({el: $("#slider")});
        var highlights_view = new HighlightsView({el: $("#highlights")});
	}
});

module.exports = IndexView;
