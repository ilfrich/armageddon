var userMap = new ReactiveVar([]);

Template.arenaranking.helpers({

<<<<<<< HEAD
    king:function() {
        //console.log(this.arena);
        ranks=this.arena.ranking.sort(function(a,b){
            return b.points- a.points;
        });
        console.log(ranks);
        var result;
        result=Meteor.call('fetchUserProfile', ranks[0].userId, function(err, data){
            Session.set('user',data);
=======
    king: function () {
        ranks = this.arena.ranking.sort(function (a, b) {
            return b.points - a.points;
        });
        var result;
        Meteor.call('fetchUserProfile', ranks[0].userId, function (err, data) {
            Session.set('user', data);
>>>>>>> e0a2b5d2d5d9e67170d322f0a76c94bc6f40ae3f
        });
        return Session.get('user');

    },

<<<<<<< HEAD

  sortedRanking: function(arena) {
=======
    sortedRanking: function(arena) {
>>>>>>> e0a2b5d2d5d9e67170d322f0a76c94bc6f40ae3f
    var arenaRanking = arena.ranking;
    arenaRanking.sort(function(a, b) {
        return b.points - a.points;
    });
    return arenaRanking;
  },

  resolveUser: function(userId) {
    return userMap.get()[userId];
  },

  fetchUserMap: function(arena) {
    if (arena.ranking !== undefined) {
        userlist = [];
        arena.ranking.forEach(function(rank) {
          userlist.push(rank.userId);
        });

        Meteor.call('fetchUserMap', userlist, function(err, data) {
            userMap.set(data);
        });
    }
  },

  incremented: function (index) {
    index++;
    return index;
  }
});

Template.arenaranking.events({
});
