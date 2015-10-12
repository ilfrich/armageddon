var toRadians=function(Value){

        /** Converts numeric degrees to radians */
        return Value * Math.PI / 180;

}
var getClosestLocation=function(){

}

MAX_DISTANCE = 3000;


Template.dashboard.helpers({
    minDistance:function() {
        var closest=null;
        var dist=null;

        _getDistance=function(me,test){
            var R = 6371000; // metres
            var φ1 = toRadians(me.lat);
            var φ2 = toRadians(test.location.latitude);
            var Δφ = toRadians(test.location.latitude-me.lat);
            var Δλ = toRadians(test.location.longitude-me.lng);

            var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

            var d = R * c;
            // console.log(d);
            return d;

        }
        var arenas=dbArena.find();
        //console.log('arenas',arenas);







        var me=userGeoLocation.get();
        //console.log(me);
        if(me==null||me==undefined) {
            //console.log('gps was undefined');
            me = simulatedLocation.get();
        }


        var closest=null;
        arenas.forEach(function(test){
            var tempDist=_getDistance(me,test);
            if(dist==null||dist>tempDist){
                dist=tempDist;
                closest=test;
            }

        })
        if (closest !== null) {
            //console.log('you are closer to '+closest.name+' and are distant '+dist+' metres');
        }
        else {
            closest = dbArena.find().fetch()[0];
            dist = 2;
        }
        Session.set('distance',dist);
        Session.set('closest',closest);

        var d = Session.get('distance');
        if(d < MAX_DISTANCE) {
            //console.log('true');
            return true;

        }
        else {
            //console.log('false');
            return false;
        }
    },
    distance:function(){
        return Session.get('distance');
    },
    closest:function(){
        return Session.get('closest');
    },

    randomArena: function() {
        return dbArena.findOne()._id;
    }
});


Template.dashboard.events({
    'click button[data-arena-id]': function(e) {
        var id = $(e.target).closest('button').attr('data-arena-id');
        Router.go('/arena/' + id);
    },

    'click .getToButton':function(){
        var closestArena=Session.get('closest');
        var me=userGeoLocation.get();
        //console.log(me);
        if(me==null||me==undefined) {
            //console.log('gps was undefined');
            me = simulatedLocation.get();
        }
        var sLocation=me.lat + "," + me.lng;
        var dLocation = closestArena.location.latitude + "," + closestArena.location.longitude;
        window.open("maps://maps.google.com/maps?saddr="+sLocation+"&daddr=" + dLocation + "&amp;ll=");

    }


});


Template.dashboard.rendered=function(){
    //console.log(userGeoLocation.get());
    var arenas=dbArena.find().fetch();
    //console.log('arenas',arenas);
    //    getClosestLocation();
}