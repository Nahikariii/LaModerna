var Backbone = require("backbone"),
	$ = require("jquery-browserify");
Backbone.$ = $;

require("./helpers.js");

$(document).ready(function () {
	var IndexRoute = require("./routes/index");
	new IndexRoute;
	Backbone.history.start({ pushState: true , hashChange: false });

	// Use absolute URLs  to navigate to anything not in your Router.
	// Only need this for pushState enabled browsers
	if (Backbone.history && Backbone.history._hasPushState) {
	 
	  // Use delegation to avoid initial DOM selection and allow all matching elements to bubble
	  $(document).delegate("a", "click", function(evt) {
		// Get the anchor href and protcol
		var href = $(this).attr("href");
		var protocol = this.protocol + "//";
	 
		// Ensure the protocol is not part of URL, meaning its relative.
		// Stop the event bubbling to ensure the link will not cause a page refresh.
		if (href.slice(protocol.length) !== protocol) {
		  evt.preventDefault();
	 
		  // Note by using Backbone.history.navigate, router events will not be
		  // triggered.  If this is a problem, change this to navigate on your
		  // router.
		  Backbone.history.navigate(href, true);
		}
	  });
	}
});
