/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
dbArena = new Mongo.Collection('arena');


GeoLocation = new SimpleSchema({
    latitude: {
        type: Number,
        decimal:true
    },
    longitude: {
        type: Number,
        decimal:true
    }
});

ArenaRanking = new SimpleSchema({
    userId: {
      type: String
    },
    points: {
      type: Number
    },
    gamesCount: {
      type: Number
    }
});

dbArena.attachSchema(new SimpleSchema({
    type: {
        type: String
    },
    name: {
        type: String
    },
    location: {
        type: GeoLocation
    },
    ranking: {
        type: [ArenaRanking],
        optional: true
    }

}));
