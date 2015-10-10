var toRadians=function(Value){

        /** Converts numeric degrees to radians */
        return Value * Math.PI / 180;

}
var getClosestLocation=function(){
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
    var arenas=dbArena.find().fetch();
    //console.log('arenas',arenas);







    var me=userGeoLocation.get();
    //console.log(me);
    if(me==null||me==undefined){
        console.log('gps was undefined');
        me={
            lat:-38,
            lng:144.991
        }
    }

    var closest=null;
    arenas.forEach(function(test){
        var tempDist=_getDistance(me,test);
        if(dist==null||dist>tempDist){
            dist=tempDist;
            closest=test;
        }

    })
    console.log('you are closer to '+closest.name+' and are distant '+dist+' metres');


}


Template.dashboard.helpers({

});
Template.dashboard.events({});
Template.dashboard.rendered=function(){
    //console.log(userGeoLocation.get());
    var arenas=dbArena.find().fetch();
    //console.log('arenas',arenas);
    getClosestLocation();
}