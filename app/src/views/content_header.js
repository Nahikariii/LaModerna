var backbone = require("backbone");

var ContentHeaderView = backbone.View.extend({
	initialize: function(initData){
		this.render(initData.headerText, initData.photo);
	},
	template: require("../../views/contentheader.hbs"),
	render: function(headerText, photo){
        this.$el.html(this.template({text: headerText, photo: photo}));
	}
});

module.exports = ContentHeaderView;
