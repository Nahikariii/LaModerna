var backbone = require("backbone");
var HeaderView = require("./header_view");
var ContentHeaderView = require("./content_header");

var pagePhoto = "/images/pizzapage.jpg";

var pizzaView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require("../../views/pizza.hbs"),
	events: {
		'click #link-pizza-video': 'goToVideo'
	},
	goToVideo: function() {
		var section = $("#pizza-video");
    	$("html, body").animate({
			scrollTop: $(section).offset().top
		});
	},
	render: function(){
		products = [];
        this.$el.html(this.template());
		var headerView = new HeaderView({el: $(".header")});
		var contentHeader = new ContentHeaderView({el: $("#content-header"), headerText: "Pizza", photo: pagePhoto });
	}
});


module.exports = pizzaView;
