var backbone = require("backbone");
var HeaderView = require("./header_view");
var ContentHeaderView = require("./content_header");
var FooterView = require("./footer_view");

var data = {
	"panaderia" : {
		 //"photo": "holder.js/1400x400",
		"photo": "http://panalino.com/wp-content/uploads/2013/10/slide6.jpg",
		"products":	[
			{
				"productTitle": "Producto 1",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
			 	 //"photo" : "holder.js/140x140",
				"photo" : "/images/bollo.jpg",
			},
			{
				"productTitle": "Producto 2",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/bollo.jpg",
			},
			{
				"productTitle": "Producto 3",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/bollo.jpg",
			},
			{
				"productTitle": "Producto 4",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/bollo.jpg",
			},
			{
				"productTitle": "Producto 1",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/bollo.jpg",
			},
			{
				"productTitle": "Producto 2",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/bollo.jpg",
			},
			{
				"productTitle": "Producto 3",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/bollo.jpg",
			},
			{
				"productTitle": "Producto 4",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/bollo.jpg",
			}
	
		]
	}
}

var CategoryView = backbone.View.extend({
	initialize: function(initData){
		this.render(initData.category);
	},
	template: require("../../views/category.hbs"),
	render: function(category){
		products = [];
        this.$el.html(this.template({category: category, products: data[category].products}));
		var headerView = new HeaderView({el: $(".header")});
		var contentHeader = new ContentHeaderView({el: $("#content-header"), headerText: category, photo: data[category].photo });
        var footer_view = new FooterView({el: $("footer")});
	}
});

module.exports = CategoryView;
