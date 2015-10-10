/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
dbGameLobby = new Mongo.Collection('gamelobby');


dbGameLobby.attachSchema(new SimpleSchema( {
    arenaId: {
      type: String
    },
    users: {
      type: [String]
    }
}));
