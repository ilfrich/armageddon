/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
dbSudoku = new Mongo.Collection('sudoku');


dbSudoku.attachSchema(new SimpleSchema({
    players: {
        type: [String]
    },
    mode: {
        type: String
    },
    rows: {
        type: [[String]]
    },
    timeTaken: {
        type: Number
    }
}));