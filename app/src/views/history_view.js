var backbone = require("backbone");
var HeaderView = require("./header_view");
var FooterView = require("./footer_view");

var HistoryView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require("../../views/history.hbs"),
	render: function(){
        this.$el.html(this.template());
		var header_view = new HeaderView({el: $(".header")});
        var footer_view = new FooterView({el: $("footer")});
	}
});

module.exports = HistoryView;
