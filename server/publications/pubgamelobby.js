/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
Meteor.publish('lobbyByArena', function(arenaId) {
    return dbGameLobby.find({ arenaId: arenaId });
});