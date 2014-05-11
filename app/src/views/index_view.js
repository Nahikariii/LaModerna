var backbone = require('backbone');
var HeaderView = require('./header_view');
var SliderView = require('./slider_view');
var HighlightsView = require('./highlights_view');

var IndexView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require('../../views/index.hbs'),
	render: function(){
        this.$el.html(this.template());
		var header_view = new HeaderView({el: $(".header")});
        var slider_view = new SliderView({el: $("#slider")});
        var highlights_view = new HighlightsView({el: $("#highlights")});
	}
});

module.exports = IndexView;
