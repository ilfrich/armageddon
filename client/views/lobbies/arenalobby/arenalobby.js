Template.arenalobby.helpers({
    king:function() {
        //console.log(this.arena);
        ranks=this.arena.ranking.sort(function(a,b){
            return b.points- a.points;
        });
        console.log(ranks);
        var result;
        result=Meteor.call('fetchUserProfile', ranks[0].userId, function(err, data){
           Session.set('user',data);
        });
        return Session.get('user');

    },
    highScore:function(){
        ranks=this.arena.ranking.sort(function(a,b){
            return b.points- a.points;
        });
        return ranks[0];

    }



});

Template.arenalobby.events({

});

Template.arenalobby.rendered=function(){



}
