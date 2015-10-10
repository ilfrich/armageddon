/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
Meteor.publish('allArenas', function() {
    return dbArena.find();
});

Meteor.publish('arena', function(arenaId) {
    return dbArena.find( {_id: arenaId } );
});