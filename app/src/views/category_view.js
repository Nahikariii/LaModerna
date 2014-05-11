var backbone = require('backbone');
var HeaderView = require('./header_view');

var CategoryView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require('../../views/category.hbs'),
	render: function(){
        this.$el.html(this.template());
		var header_view = new HeaderView({el: $(".header")});
	}
});

module.exports = CategoryView;
