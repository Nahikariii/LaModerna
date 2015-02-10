var backbone = require("backbone");

var data = [
    {
		"title": "Pizza",
		"photo" : "/images/pizza.jpg",
	    "content":"¡Nuevo! Acercate a alguna de nuestras tiendas para probar nuestra masa de pizza. Hacer una pizza casera nunca fue tan fácil, sigue nuestras instrucciones y a comer",
		"continue" : "Leer más",
		"href": "pizza"
    },
    {
		"title": "Ofrecemos",
		"photo" : "/images/pan-highlight.jpg",
		"content" : "Como productores exclusivos de pan nos aseguramos de ofrecer una amplia gama de productos de alta calidad, desde el pan casero de toda la vida hasta panes innovadores con sabores de todo tipo.",
		"continue" : "Informáte",
		"href": "hosteleria"
    },
    {
		"title": "Contactanos",
		"photo" : "/images/typing.jpg",
		"content" : "Si tienes alguna duda sobre alguno de nuestros productos, te gustaría hacernos una sugerencia o simplemente quieres decirnos lo mucho que te gusta alguno de nuestros panes no dudes en ponerte en contacto con nosotros. Estaremos encantados de escucharte.",
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
