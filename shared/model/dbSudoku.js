/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
dbSudoku = new Mongo.Collection();

SudokuRow = new SimpleSchema({
    fields: {
        type: [String]
    }
});

dbSudoku.attachSchema(new SimpleSchema({
    players: {
        type: [String]
    },
    mode: {
        type: String
    },
    rows: {
        type: [SudokuRow]
    },
    timeTaken: {
        type: Number
    }
}));