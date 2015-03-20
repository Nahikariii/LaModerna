var backbone = require("backbone");
var HeaderView = require("./header_view");
var ContentHeaderView = require("./content_header");
var FooterView = require("./footer_view");

var pagePhoto = "/images/find_us_header.jpg";

var shops = [
    {
        "title": "Mungia",
        "address": "C/ Aita Elorriaga 8, 48100",
        "timetable": "L-V: 7:00-14:30, 16:00-20:30<br> S-D: 8:00-14:00",
        "telephone": "94 615 63 54",
        "type": "shop",
        "lat": "43.353381",
        "long": "-2.845269",
    },
    {
        "title": "Mungia",
        "address": "C/ Errekatxu 3, 48100",
        "timetable": "L-V: 6:30-14:00, 17:00-21:00<br> S-D: 7:30-14:30",
        "telephone": "94 674 82 07",
        "type": "shop",
        "lat": "43.355483",
        "long": "-2.849091",
    },
    {
        "title": "Derio",
        "address": "Gernikako Arbola Etorbidea 6, Derio 48160",
        "timetable": "L-V: 9:00-18:00 <br> S: 9:00-13:00 <br> D: cerrado",
        "telephone": "941232534",
        "type": "shop",
        "lat": "43.292441",
        "long": "-2.886623",
    },
    {
        "title": "Algorta",
        "address": "C/ Arene Azpi 4, Algorta 48990 ",
        "timetable": "L-V: 9:00-18:00 <br> S: 9:00-13:00 <br> D: cerrado",
        "telephone": "941232534",
        "type": "shop",
        "lat": "43.348575",
        "long": "-3.004309",
    },
    {
        "title": "Gorliz",
        "address": "C/ Eloisa Artaza Local 3ºG, Gorliz 48630",
        "timetable": "L-V: 9:00-18:00 <br> S: 9:00-13:00 <br> D: cerrado",
        "telephone": "941232534",
        "type": "shop",
        "lat": "43.413677",
        "long": "-2.937525",
    },
    {
        "title": "Getxo",
        "address": "Avd. de los Chopos 35, 48990",
        "timetable": "L-V: 9:00-18:00 <br> S: 9:00-13:00 <br> D: cerrado",
        "telephone": "941232534",
        "type": "shop",
        "lat": "43.352473",
        "long": "-3.010238",
    },
    {
        "title": "Bilbao",
        "address": "C/ Juan de Garay 13, 48003",
        "timetable": "L-V: 9:00-18:00 <br> S: 9:00-13:00 <br> D: cerrado",
        "telephone": "941232534",
        "type": "shop",
        "lat": "43.254784",
        "long": "-2.933417",
    },
    {
        "title": "Sestao",
        "address": "C/ Villar y Villate 8, 48910",
        "timetable": "L-V: 8:00-14:30, 17:00-21:00<br> S-D: 8:00-15:00",
        "telephone": "94 496 14 44",
        "type": "shop",
        "lat": "43.308674",
        "long": "-3.006907",
    },
    {
        "title": "Obrador",
        "address": "Tejera bidea (Pol. Ind. Belako), Pabellon 23",
        "telephone": "94 674 01 77",
        "type": "factory",
        "lat": "43.3399902",
        "long": "-2.7869898",
    }
];

var marker_icons = {"shop": "images/bread_marker.png", "factory": "images/factory_marker.png"};

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
        center: new google.maps.LatLng(43.334568, -2.901794),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    for (var x = 0; x < shops.length; x++) {
        var shop = shops[x];
        var latlng = new google.maps.LatLng(shop.lat, shop.long);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: marker_icons[shop.type],
            labelContent: x,
        });
        google.maps.event.addListener(marker, 'click', function() {
            var element_id = 'shop-' + this.labelContent;
            $('.orange-border').removeClass('orange-border');
            document.getElementById(element_id).className += " orange-border";
        });
    }
}

window.initializeGoogleMaps = initializeGoogleMaps;

module.exports = FindUsView;
