/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
Meteor.methods({
    removeUserFromLobbies: function() {
        var userId = Meteor.userId();
        dbGameLobby.update({}, { $pull: {
            users: userId
        }});
    },

    addUserToLobby: function(arenaId) {
        // load the lobby for this arena
        var lobby = dbGameLobby.findOne({ arenaId: arenaId });
        if (lobby === undefined) {
            var lobbyId = dbGameLobby.insert({
                arenaId: arenaId,
                users: []
            });
            lobby = dbGameLobby.findOne(lobbyId);
        }

        // add user to lobby
        dbGameLobby.update(lobby._id, { $push: {
            users: Meteor.userId()
        }});
    },

    addPlayerToGame: function(gameId, userId) {
        dbSudoku.update(gameId, { $push: {
            players: userId
        }});
        Meteor.users.update(userId, { $set: {
            'profile.joinGame': gameId
        }});
    }
});