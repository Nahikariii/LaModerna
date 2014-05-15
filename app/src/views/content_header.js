var backbone = require('backbone');

var ContentHeaderView = backbone.View.extend({
	initialize: function(initData){
		this.render(initData.headerText);
	},
	template: require('../../views/contentheader.hbs'),
	render: function(headerText){
        this.$el.html(this.template({text: headerText}));
	}
});

module.exports = ContentHeaderView;
