var backbone = require("backbone");

var data = [
    {
		"title": "Productos artesanales",
		 //"photo" : "holder.js/1600x400",
		"photo" : "http://panalino.com/wp-content/uploads/2013/10/slide8.jpg",
		"active": true,
    },
    {
		"title": "Matería prima de primera calidd",
		"photo" : "holder.js/1600x400",
    },
    {
		"title": "Muchas cosas",
		"photo" : "holder.js/1600x400",
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
