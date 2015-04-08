var backbone = require("backbone");
var HeaderView = require("./header_view");
var FooterView = require("./footer_view");
var ContentHeaderView = require("./content_header");

var pagePhoto = "/images/fabrica.jpg";

var HistoryView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require("../../views/history.hbs"),
	render: function(){
        this.$el.html(this.template());
		var header_view = new HeaderView({el: $(".header")});
		var contentHeader = new ContentHeaderView({el: $("#content-header"), headerText: "Historia", photo: pagePhoto });
        var footer_view = new FooterView({el: $("footer")});
	}
});

module.exports = HistoryView;
