var backbone = require('backbone');
var HeaderView = require('./header_view');
var ContentHeaderView = require('./content_header');

var data = {
	'panaderia' : {
		'photo': 'holder.js/1600x400',
		'products':	[
			{
				'productTitle': 'Producto 1',
				'description' : 'Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.',
				'photo' : 'holder.js/140x140',
			},
			{
				'productTitle': 'Producto 2',
				'description' : 'Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.',
				'photo' : 'holder.js/140x140',
			},
			{
				'productTitle': 'Producto 3',
				'description' : 'Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.',
				'photo' : 'holder.js/140x140',
			},
			{
				'productTitle': 'Producto 4',
				'description' : 'Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.',
				'photo' : 'holder.js/140x140',
			}
		]
	}
}

var CategoryView = backbone.View.extend({
	initialize: function(initData){
		this.render(initData.category);
	},
	template: require('../../views/category.hbs'),
	render: function(category){
		products = [];
        this.$el.html(this.template({category: category, products: data[category].products}));
		var headerView = new HeaderView({el: $(".header")});
		var contentHeader = new ContentHeaderView({el: $("#content-header"), headerText: category, photo: data[category].photo });
	}
});

module.exports = CategoryView;
