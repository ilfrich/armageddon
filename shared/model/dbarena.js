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


dbArena.attachSchema(new SimpleSchema({
    name: {
        type: String
    },
    location: {
        type: GeoLocation
    }
}));



