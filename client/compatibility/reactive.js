//location = new ReactiveVar();

simulatedLocation=new ReactiveVar({lat:-37.802,lng:144.9673});
userGeoLocation = new ReactiveVar(null);

Tracker.autorun(function (computation) {
    if (Geolocation) {
        userGeoLocation.set(Geolocation.latLng());
        if (userGeoLocation.get()) {
            //stop the tracker if we got something
            computation.stop();
            console.log(Geolocation.latLng());
        }
    }
});


if (Meteor.isClient) {
    Meteor.startup(function() {
        GoogleMaps.load();
    });
}

