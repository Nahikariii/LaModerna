var backbone = require("backbone");

var data = [
    {
		"title": "Pizza",
		 //"photo" : "holder.js/140x140",
		"photo" : "/images/pizza.jpg",
	    "content":"Wafer tart jelly muffin marzipan. Toffee chupa chups oat cake applicake oat cake jelly beans lollipop cheesecake jelly. Croissant dragée halvah. Gummies pastry chocolate cake caramels jelly dragée chocolate cake icing.",
		"continue" : "Leer más",
		"href": "pizza"
    },
    {
		"title": "Ofrecemos",
		"photo" : "/images/pizza.jpg",
		"content" : "Como productores exclusivos de pan nos aseguramos de ofrecer una amplia gama de productos de alta calidad, desde el pan casero de toda la vida hasta panes innovadores con sabores de todo tipo.",
		"continue" : "Informáte",
		"href": "hosteleria"
    },
    {
		"title": "Contactanos",
		"photo" : "/images/pizza.jpg",
		"content" : "Si tienes alguna duda sobre alguno de nuestros productos, te gustaría hacernos una sugerencia o simplemente quieres decirnos lo mucho que te gusta alguno de nuestros productos no dudes en ponerte en contacto con nosotros. Estaremos encantados de atenderte.",
		"continue" : "Leer más",
		"href": "contacto"
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
