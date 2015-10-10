//location = new ReactiveVar();

userGeoLocation = new ReactiveVar(null);

Tracker.autorun(function (computation) {
    if (Geolocation) {
        userGeoLocation.set(Geolocation.latLng());
        if (userGeoLocation.get()) {
            //stop the tracker if we got something
            computation.stop();
            //console.log(Geolocation.latLng());
        }
    }
});


if (Meteor.isClient) {
    Meteor.startup(function() {
        GoogleMaps.load();
    });
}

