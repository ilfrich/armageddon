/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */

Meteor.methods({

    createSudokuGame: function (arena, mode) {
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
    },


    sudokuWon: function(game, remaining) {
        // update game
        dbSudoku.update({ _id: game._id }, { $set: {
            timeTaken: remaining + 180
        }});

        if (remaining > 0) {
            // update arena ranking
            var userId = Meteor.userId();
            var arena = dbArena.findOne(game.arenaId);

            // fetch ranking
            var ranking = arena.ranking;
            if (ranking === undefined) {
                ranking = [];
            }

            // find current rank object
            var currentRankObject = null
            ranking.forEach(function(rank) {
                if (rank.userId == userId) {
                    currentRankObject = rank;
                }
            });

            // fall back if not ranked yet
            if (currentRankObject == null) {
                currentRankObject = {
                    userId: userId,
                    points: 0,
                    gamesCount: 0
                };
            }
            // add points
            currentRankObject.points += remaining;
            currentRankObject.gamesCount++;

            // update arena ranking
            dbArena.update({ _id: arena._id }, { $pull: {
                ranking: {
                    userId: userId
                }
            }});
            dbArena.update({ _id: arena._id }, { $push: {
                ranking: currentRankObject
            }});

        }
    }

});


/*
 * ######################################################################
 * Supporting Functions
 * ######################################################################
 */

function createSudokuEntry(data) {
    var entry = {
        rows: [],
        timeTaken: 0,
        started: new Date()
    };

    var rowNumber = 1;
    data.rows.forEach(function (row) {

        var currentRow = {
            rowNumber: rowNumber,
            fields: []
        }

        var colNumber = 1;
        row.fields.forEach(function (field) {
            var entry = {
                colNumber: colNumber,
                fixed: false
            };
            if (field !== null) {
                entry.value = field;
                entry.fixed = true;
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
        },
        {
            rows: [
                {
                    fields: [1, 5, 8, 4, 7, 9, 3, 2, 6]
                },
                {
                    fields: [9, 6, 7, 8, 3, 2, 5, 1, 4]
                },
                {
                    fields: [2, 4, 3, 5, 6, 1, 7, 9, 8]
                },
                {
                    fields: [8, 2, 9, 1, 5, 7, 4, 6, 3]
                },
                {
                    fields: [3, 7, 6, 9, 2, 4, 8, 5, 1]
                },
                {
                    fields: [5, 1, 4, 6, 8, 3, 2, 7, 9]
                },
                {
                    fields: [7, 3, 1, 2, 4, 6, 9, 8, 5]
                },
                {
                    fields: [4, 9, 5, 7, 1, 8, 6, 3, 2]
                },
                {
                    fields: [6, 8, 2, 3, 9, 5, 1, 4, null]
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


