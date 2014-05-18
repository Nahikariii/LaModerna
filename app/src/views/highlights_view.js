var backbone = require("backbone");

var data = [
    {
		"title": "Pizza",
		 //"photo" : "holder.js/140x140",
		 "photo" : "/images/pizza.jpg",
		"content" : "El secreto esta en la mas. Cupcake ipsum dolor sit amet gummies. I love biscuit halvah powder chocolate bar gummies gummi bears. Gummi bears applicake croissant lemon drops jelly. Tart pastry soufflé unerdwear.com unerdwear.com jujube",
		"continue" : "Leer m�s",
		"href": "#/pizza"
    },
    {
		"title": "Ofrecemos",
		"photo" : "/images/pizza.jpg",
		"content" : "Contratos personalizados, amplia gama de productos y clientes satisfechos.upcake ipsum dolor sit amet gummies. I love biscuit halvah powder chocolate bar gummies gummi bears. Gummi bears applicake croissant lemon drops jelly. Tart pastry soufflé unerdwear.com unerdwear.com jujube",
		"continue" : "Informáe",
		"href": "#"
    },
    {
		"title": "Contactanos",
		"photo" : "/images/pizza.jpg",
		"content" : "Cupcake ipsum dolor sit amet gummies. I love biscuit halvah powder chocolate bar gummies gummi bears. Gummi bears applicake croissant lemon drops jelly. Tart pastry soufflé unerdwear.com unerdwear.com jujubes",
		"continue" : "Leer m�s",
		"href": "#"
    }
]

var HighlightsView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require('../../views/highlights.hbs'),
	render: function(){
		this.$el.html(this.template({highlights: data}));
	}
});

module.exports = HighlightsView;
