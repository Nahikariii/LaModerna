var Handlebars = require("hbsfy/runtime");

Handlebars.registerHelper('shop-block', function(index, action, options) {
	if (action == 'open' && ( index == 0 || index == 4 || index == 8))
	{
		return options.fn(this);
    }
	if (action == 'close' && ( index == 3 || index == 7 || index == 8))
	{
		return options.fn(this);
    }
	return options.inverse(this);
});

