

getGeolocation=function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            //location=position;
            console.log(position);
        });

    } else {
        console.log('not supported');
     //   x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

/**
 * Client Initialization. When the client has loaded all the resources, execute this.
 */
Meteor.startup(function() {

    /*
     * Retrieves the environment type from the server (process variable is only available on the server) and stores it
     * in the session.
     */
    if (Session.get('env') === undefined) {
        Meteor.call('getEnvironment', function(err, settings) {
            Session.set('env', settings.env);
        });
    };


    getGeolocation();

    console.log('getting');
    //console.log();




});