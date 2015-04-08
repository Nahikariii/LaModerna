var backbone = require("backbone");
var HeaderView = require("./header_view");
var ContentHeaderView = require("./content_header");
var FooterView = require("./footer_view");

var pagePhoto = "/images/pizza_header.jpg";

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
        var footerView = new FooterView({el: $("footer")});
	}
});


module.exports = pizzaView;
