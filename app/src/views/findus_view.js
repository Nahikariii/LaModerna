var backbone = require("backbone");
var HeaderView = require("./header_view");
var ContentHeaderView = require("./content_header");
var FooterView = require("./footer_view");

var pagePhoto = "/images/tienda.jpg";

var shops = [
	{
		"title": "Tienda 1",
		"address": "Aita Elorriaga 3, Mungia",
		"timetable": "L-V: 9:00-18:00 <br> S: 9:00-13:00 <br> D: cerrado",
		"telephone": "941232534",
	},
	{
		"title": "Tienda 2",
		"address": "Aita Elorriaga 3, Mungia",
		"timetable": "L-V: 9:00-18:00 <br> S: 9:00-13:00 <br> D: cerrado",
		"telephone": "941232534",
	},
	{
		"title": "Tienda 2",
		"address": "Aita Elorriaga 3, Mungia",
		"timetable": "L-V: 9:00-18:00 <br> S: 9:00-13:00 <br> D: cerrado",
		"telephone": "941232534",
	},
	{
		"title": "Tienda 2",
		"address": "Aita Elorriaga 3, Mungia",
		"timetable": "L-V: 9:00-18:00 <br> S: 9:00-13:00 <br> D: cerrado",
		"telephone": "941232534",
	},
	{
		"title": "Tienda 2",
		"address": "Aita Elorriaga 3, Mungia",
		"timetable": "L-V: 9:00-18:00 <br> S: 9:00-13:00 <br> D: cerrado",
		"telephone": "941232534",
	}
];

var FindUsView = backbone.View.extend({
	initialize: function(){
		this.once("renderDone", function() {
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initializeGoogleMaps";
			document.body.appendChild(script);
		});
		this.render();
	},
	template: require("../../views/findus.hbs"),
	render: function(){
		products = [];
        this.$el.html(this.template({shops: shops}));
		var headerView = new HeaderView({el: $(".header")});
		var contentHeader = new ContentHeaderView({el: $("#content-header"), headerText: "Donde estamos", photo: pagePhoto });
        var footer_view = new FooterView({el: $("footer")});
		this.trigger("renderDone");
	}
});

function initializeGoogleMaps() {
	var mapCanvas = document.getElementById("map_canvas");
	var mapOptions = {
		center: new google.maps.LatLng(43.3538162, -2.8465597),
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
}

window.initializeGoogleMaps = initializeGoogleMaps;

module.exports = FindUsView;
