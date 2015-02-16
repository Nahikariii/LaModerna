var backbone = require("backbone");

var data = [
    {
		"title": "Innovación",
		"photo" : "/images/slide1.jpg",
		"active": true,
    },
    {
		"title": "Diferenciación",
		"photo" : "/images/slide2.jpg",
    },
    {
		"title": "Calidad",
		"photo" : "/images/slide3.jpg",
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
