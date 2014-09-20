var backbone = require("backbone");
var HeaderView = require("./header_view");
var ContentHeaderView = require("./content_header");
var FooterView = require("./footer_view");

var data = {
	"pancasero" : {
		 //"photo": "holder.js/1400x400",
		"photo": "http://panalino.com/wp-content/uploads/2013/10/slide6.jpg",
		"headerText": "Pan casero",
		"products":	[
			{
				"productTitle": "Producto 1",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/pan1.jpg",
				"magnified-photo" : "/images/_DSF5132.jpg",
				"reference": "C1345",
				"quantity": "25",
				"weight": "25"
			},
			{
				"productTitle": "Producto 2",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/pan2.jpg",
				"magnified-photo" : "/images/_DSF5132.jpg",
				"reference": "C1345",
				"quantity": "25",
				"weight": "25"
			},
			{
				"productTitle": "Producto 3",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/pan3.jpg",
				"magnified-photo" : "/images/_DSF5132.jpg",
				"reference": "C1345",
				"quantity": "25",
				"weight": "25"
			},
			{
				"productTitle": "Producto 4",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/pan4.jpg",
				"magnified-photo" : "/images/_DSF5132.jpg",
				"reference": "C1345",
				"quantity": "25",
				"weight": "25"
			},
			{
				"productTitle": "Producto 5",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/pan4.jpg",
				"magnified-photo" : "/images/_DSF5132.jpg",
				"reference": "C1345",
				"quantity": "25",
				"weight": "25"
			},
			{
				"productTitle": "Producto 6",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/pan3.jpg",
				"magnified-photo" : "/images/_DSF5132.jpg",
				"reference": "C1345",
				"quantity": "25",
				"weight": "25"
			},
			{
				"productTitle": "Producto 7",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/pan2.jpg",
				"magnified-photo" : "/images/_DSF5132.jpg",
				"reference": "C1345",
				"quantity": "25",
				"weight": "25"
			},
			{
				"productTitle": "Producto 8",
				"description" : "Cupcake ipsum dolor sit amet. Jelly beans dragée gummi bears unerdwear.",
				"photo" : "/images/pan1.jpg",
				"magnified-photo" : "/images/_DSF5132.jpg",
				"reference": "C1345",
				"quantity": "25",
				"weight": "25"
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
		var categoryData = data[category];
        this.$el.html(this.template({category: categoryData.headerText, products: categoryData.products}));
		var headerView = new HeaderView({el: $(".header")});
		var contentHeader = new ContentHeaderView({el: $("#content-header"), headerText: categoryData.headerText, photo: categoryData.photo });
        var footer_view = new FooterView({el: $("footer")});
	}
});

module.exports = CategoryView;
