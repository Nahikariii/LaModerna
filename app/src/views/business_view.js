var backbone = require("backbone");
var HeaderView = require("./header_view");
var ContentHeaderView = require("./content_header");
var FooterView = require("./footer_view");

var pagePhoto = "/images/hosteleria.jpg";

var BusinessView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require("../../views/business.hbs"),
	render: function(){
		products = [];
        this.$el.html(this.template());
		var headerView = new HeaderView({el: $(".header")});
		var contentHeader = new ContentHeaderView({el: $("#content-header"), headerText: "Hostelería", photo: pagePhoto });
        var footer_view = new FooterView({el: $("footer")});
	}
});


module.exports = BusinessView;
