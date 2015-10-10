var userMap = new ReactiveVar([]);

Template.arenaranking.helpers({
  sortedRanking: function(arena) {
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
