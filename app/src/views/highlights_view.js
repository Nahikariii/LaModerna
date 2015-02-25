var backbone = require("backbone");

var data = [
    {
		"title": "Pizza",
		"photo" : "/images/pizza.jpg",
	    "content":"¡Nuevo! Ahora en nuestras tiendas tambien podras encontrar masa de pizza. No dudes en probarla, hacer una pizza casera nunca fue tan fácil. Nosotros te proporcionamos las instrucciones, sigue los pasos y a comer. ",
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
		"content": "Si tienes alguna duda sobre alguno de nuestros productos, te gustaría hacernos una sugerencia o simplemente quieres decirnos lo mucho que te gusta alguno de nuestros panes no dudes en ponerte en contacto con nosotros.",
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
