var backbone = require('backbone');

var data = [
    {
		'title': 'Pizza',
		'photo' : 'holder.js/140x140',
		'content' : 'El secreto esta en la mas. Cupcake ipsum dolor sit amet gummies. I love biscuit halvah powder chocolate bar gummies gummi bears. Gummi bears applicake croissant lemon drops jelly. Tart pastry soufflé unerdwear.com unerdwear.com jujubes',
		'continue' : 'Leer más'
    },
    {
		'title': 'Ofrecemos',
		'photo' : 'holder.js/140x140',
		'content' : 'Contratos personalizados, amplia gama de productos y clientes satisfechos.upcake ipsum dolor sit amet gummies. I love biscuit halvah powder chocolate bar gummies gummi bears. Gummi bears applicake croissant lemon drops jelly. Tart pastry soufflé unerdwear.com unerdwear.com jujubes',
		'continue' : 'Informáte'
    },
    {
		'title': 'Contactanos',
		'photo' : 'holder.js/140x140',
		'content' : 'Cupcake ipsum dolor sit amet gummies. I love biscuit halvah powder chocolate bar gummies gummi bears. Gummi bears applicake croissant lemon drops jelly. Tart pastry soufflé unerdwear.com unerdwear.com jujubes.',
		'continue' : 'Leer más'
    }
]

var HighlightsView = backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: require('../../views/highlights.hbs'),
	render: function(){
		this.$el.html(this.template({highlight: data}));
	}
});

module.exports = HighlightsView;
