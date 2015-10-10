var short = [];
var medium = [];
var long = [];
var offers = [];
var needs = [];
var waiting = [];


var matchIcon = function (item) {
    switch (item) {
        case "Accomodation":
            return 'bed';
            break;
        case "Food":
            return 'cutlery';
            break;
        case "Clothing":
            return 'user';
            break;
        case "Transport":
            return 'automobile';
            break;
        case "Professionals":
            return 'suitcase';
            break;
        case "Support":
            return 'stethoscope';
            break;


    }


};

Template.mapControl.helpers({
    mapOptions: function () {
        var geo = userGeoLocation.get();
        if (geo == null) {
            geo = {
                lat: -38,
                lng: 144.991
            }
        }
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(geo.lat, geo.lng),
                zoom: 10,
                styles: [{
                    "featureType": "landscape",
                    "elementType": "labels",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "transit",
                    "elementType": "labels",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{"visibility": "off"}]
                }, {"stylers": [{"hue": "#00aaff"}, {"saturation": -100}, {"gamma": 2.15}, {"lightness": 12}]}, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{"visibility": "on"}, {"lightness": 24}]
                }, {"featureType": "road", "elementType": "geometry", "stylers": [{"lightness": 57}]}]
            };
        }
    },
});


Template.mapControl.rendered = function () {

};

Template.mapControl.onCreated(function () {
    GoogleMaps.ready('map', function (map) {


        google.maps.event.addListener(map.instance, 'click', function (event) {
            //Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        });


        var markers = {};

        dbArena.find().observe({
            added: function (document) {

                // Create a marker for this document

                //   var icon=matchIcon(document.category);
                /*console.log(document.category);
                 console.log(do)
                 console.log(icon);
                 */
                //           var image = 'images/markers/azure.png';


                /*   var contentString = '<div id="content">'+
                 '<div id="siteNotice">'+
                 '</div>'+
                 '<h1 id="firstHeading" class="firstHeading"><i class="fa fa-'+icon+'" ></i><span style="margin-left:20px">'+document.item+'</span>    </h1>'+
                 '<div id="bodyContent">'+
                 '<p><b> Information</b> about this <b>'+document.item+'</b></p>'+
                 '<p>Needer <b>'+document.needUsername+' </b> matched <b>'+document.offerUsername+'</b></p>'+

                 '<p>Attribution: Match, <a href="">'+document.date+'</p>'+
                 '</div>'+
                 '</div>';
                 var infowindow = new google.maps.InfoWindow({
                 content: contentString
                 });*/

                console.log(document);

                var markerOffer = new google.maps.Marker({

                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(document.location.latitude, document.location.longitude),
                    map: map.instance,
                    title: document.name,
                    // We store the document _id on the marker in order
                    // to update the document within the 'dragend' event belo¸¸w.
                    id: document._id, visible: true
                });


            }
        });


    });
});
