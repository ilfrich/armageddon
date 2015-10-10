/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */


function createSudokuEntry(data) {
    var entry = {
        rows: [],
        timeTaken: 0,
        started: new Date()
    };

    var rowNumber = 1;
    data.rows.forEach(function(row) {

        var currentRow = {
            rowNumber: rowNumber,
            fields: []
        }

        var colNumber = 1;
        row.fields.forEach(function(field) {
            var entry = {
                colNumber: colNumber
            };
            if (field !== null) {
                entry.value = field;
            }

            currentRow.fields.push(entry)
            colNumber++;
        });

        entry.rows.push(currentRow);
        rowNumber++;
    });


    return entry;
}

function getSudokuTemplates() {
    return [
        {
            rows: [
                {
                    fields: [null, 3, null, 9, null, 4, null, 8, null]
                },
                {
                    fields: [null, null, null, 6, null, 7, null, null, null]
                },
                {
                    fields: [6, 5, null, null, 1, null, null, 3, 4]
                },
                {
                    fields: [null, 6, 7, null, null, null, 1, 2, null]
                },
                {
                    fields: [5, null, null, null, null, null, null, null, 9]
                },
                {
                    fields: [null, 2, 3, null, null, null, 8, 6, null]
                },
                {
                    fields: [2, 4, null, null, 7, null, null, 1, 6]
                },
                {
                    fields: [null, null, null, 1, null, 6, null, null, null]
                },
                {
                    fields: [null, 9, null, 4, null, 8, null, 5, null]
                }
            ]
        },
        {
            rows: [
                {
                    fields: [null, 2, 4, 7, null, 5, 6, 9, null]
                },
                {
                    fields: [null, null, 6, 9, null, 2, 4, null, null]
                },
                {
                    fields: [1, null, null, null, 4, null, null, null, 3]
                },
                {
                    fields: [null, 4, null, null, null, null, null, 7, null]
                },
                {
                    fields: [null, null, null, 6, null, 8, null, null, null]
                },
                {
                    fields: [null, 5, null, null, null, null, null, 3, null]
                },
                {
                    fields: [8, null, null, null, 7, null, null, null, 9]
                },
                {
                    fields: [null, null, 5, 3, null, 9, 7, null, null]
                },
                {
                    fields: [null, 9, 7, 5, null, 4, 3, 8, null]
                }
            ]
        }
    ]
}

/*
 {
 rows: [
 {
 fields: []
 },
 {
 fields: []
 },
 {
 fields: []
 },
 {
 fields: []
 },
 {
 fields: []
 },
 {
 fields: []
 },
 {
 fields: []
 },
 {
 fields: []
 },
 {
 fields: []
 }
 ]
 }
 */

Meteor.methods({

    createSudokuGame: function(arena, mode) {
        var templates = getSudokuTemplates();
        var index = Math.floor(Math.random() * templates.length)
        var template = templates[index];

        var entry = createSudokuEntry(template);
        entry.players = [Meteor.userId()];
        entry.started = new Date();
        entry.arenaId = arena;
        entry.mode = mode;

        var id = dbSudoku.insert(entry);
        return id;
    }

});

