/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
dbSudoku = new Mongo.Collection('sudoku');

SudokuFieldSchema = new SimpleSchema({
    colNumber: {
        type: Number
    },
    value: {
        type: Number,
        optional: true
    }
});

SudokuRowSchema = new SimpleSchema({
    rowNumber: {
        type: Number
    },
    fields: {
        type: [SudokuFieldSchema]
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
        type: [SudokuRowSchema]
    },
    timeTaken: {
        type: Number
    },
    started: {
        type: Date
    },
    arenaId: {
        type: String
    }
}));

if (Meteor.isServer) {
    dbSudoku.allow({
        insert: function() {
            return true;
        },
        update: function() {
            return true;
        }
    });
}