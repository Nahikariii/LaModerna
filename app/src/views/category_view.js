var backbone = require('backbone');
var HeaderView = require('./header_view');
var ContentHeaderView = require('./content_header');

var CategoryView = backbone.View.extend({
	initialize: function(initData){
		this.render(initData.category);
	},
	template: require('../../views/category.hbs'),
	render: function(category){
		products = [];
        this.$el.html(this.template({category: category, products: products}));
		var headerView = new HeaderView({el: $(".header")});
		var contentHeader = new ContentHeaderView({el: $("#content-header"), headerText: category}); }
});

module.exports = CategoryView;
