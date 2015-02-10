var backbone = require("backbone");

var data = [
    {
		"title": "Innovación",
		"photo" : "/images/testpanes.jpg",
		"active": true,
    },
    {
		"title": "Diferenciación",
		"photo" : "/images/slider-panes.jpg",
    },
    {
		"title": "Calidad",
		"photo" : "/images/testpan.jpg",
    }
]

var SliderView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require("../../views/slider.hbs"),
	render: function(){
		this.$el.html(this.template({slider: data}));
	}
});

module.exports = SliderView;
