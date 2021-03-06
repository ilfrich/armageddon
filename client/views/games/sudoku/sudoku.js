/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
var runtime = new ReactiveVar(0);


function updateGame(game, row, col, newValue) {

    var newRows = [];
    game.rows.forEach(function(r) {
        if (r.rowNumber == row) {
            var newFields = [];
            r.fields.forEach(function(f) {
                if (f.colNumber == col) {
                    if (newValue == null) {
                        delete f.value;
                    }
                    else {
                        f.value = newValue;
                    }
                }
                newFields.push(f);
            });
            r.fields = newFields;
        }
        newRows.push(r);
    });

    dbSudoku.update({ _id: game._id }, { $set: {
        rows: newRows
    }});

    game.rows = newRows;
    return game;
}

function validateQuadrant(game, rowFrom, rowTo, colFrom, colTo) {
    var numbers = [];

    // handle fixed numbers
    game.rows.forEach(function(row) {
        if (row.rowNumber >= rowFrom && row.rowNumber <= rowTo) {
            row.fields.forEach(function(col) {
                if (col.colNumber >= colFrom && col.colNumber <= colTo) {
                    if (col.fixed === true) {
                        numbers.push(col.value);
                    }
                }
            });
        }
    });

    // handle own numbers
    game.rows.forEach(function(row) {
        if (row.rowNumber >= rowFrom && row.rowNumber <= rowTo) {
            row.fields.forEach(function(col) {
                if (col.colNumber >= colFrom && col.colNumber <= colTo) {
                    if (col.fixed === false) {
                        if (numbers.indexOf(col.value) == -1) {
                            numbers.push(col.value);
                        }
                        else if (col.value !== undefined) {
                            var culprit = $('#game-area .cell[data-row="' + row.rowNumber + '"][data-col="' + col.colNumber + '"]');
                            culprit.addClass('error').removeClass('selected');
                        }
                    }
                }
            });
        }
    });

    return (numbers.length == 9);
}


function checkGame(game) {
    $('.cell.error').removeClass('error');

    // validate quadrants
    var quadrantValidation = [validateQuadrant(game, 1, 3, 1, 3),
                validateQuadrant(game, 1, 3, 4, 6),
                validateQuadrant(game, 1, 3, 7, 9),
                validateQuadrant(game, 4, 6, 1, 3),
                validateQuadrant(game, 4, 6, 4, 6),
                validateQuadrant(game, 4, 6, 7, 9),
                validateQuadrant(game, 7, 9, 1, 3),
                validateQuadrant(game, 7, 9, 4, 6),
                validateQuadrant(game, 7, 9, 7, 9)];

    var result = (quadrantValidation.indexOf(false) == -1);
    var allCols = [];

    // validating rows
    game.rows.forEach(function(row) {
        var alreadyUsed = [];
        row.fields.forEach(function(field) {
            if (field.fixed) {
                // add to row
                alreadyUsed.push(field.value);

                // add to column storage
                if (allCols[field.colNumber] === undefined) {
                    allCols[field.colNumber] = new Array();
                }
                allCols[field.colNumber].push(field.value);
            }
        });
        row.fields.forEach(function(field) {
            if (!field.fixed) {
                if (field.value > 0) {
                    if (alreadyUsed.indexOf(field.value) == -1) {
                        alreadyUsed.push(field.value);
                    }
                    else {
                        // handle invalid row
                        var culprit = $('#game-area .cell[data-row="' + row.rowNumber + '"][data-col="' + field.colNumber + '"]');
                        culprit.addClass('error').removeClass('selected');
                    }

                    // handle column storage
                    if (allCols[field.colNumber] === undefined) {
                        allCols[field.colNumber] = new Array();
                    }
                    if (allCols[field.colNumber].indexOf(field.value) == -1) {
                        allCols[field.colNumber].push(field.value);
                    }
                    else {
                        // handle invalid column value
                        var culprit = $('#game-area .cell[data-row="' + row.rowNumber + '"][data-col="' + field.colNumber + '"]');
                        culprit.addClass('error').removeClass('selected');
                    }
                }
            }

        });
        if (alreadyUsed.length != 9) {
            result = false;
        }
    });

    // validating columns
    if (allCols.length < 9) {
        result = false;
    }
    allCols.forEach(function(col) {
        if (col.length != 9) {
            result = false;
        }
    });

    return result;
}



Template.sudoku.helpers({

    displayTime: function() {
        var seconds = runtime.get();

        var minutes = Math.floor(seconds / 60);
        var secs = seconds % 60;

        setTimeout(function() {
            runtime.set(runtime.get() + 1);
        }, 1000)

        return minutes + ':' + (secs < 10 ? ('0' + secs) : (secs));
    },

    currentGame: function() {
        var game = dbSudoku.findOne({ _id: Session.get('sudokuId') });
        if (game !== undefined) {
            if (checkGame(game)) {
                if (Template.instance().gameClosed === false) {
                    Template.instance().gameClosed = true;
                    sAlert.success('Game Won!');
                    $('.cell.error').removeClass('error');
                    Meteor.call('sudokuWon', game, runtime.get(), function(err, data) {
                        setTimeout(function() {
                            Router.go('/arena/' + game.arenaId);
                        }, 1000)
                    });
                }
            }
        }
        return game;
    },

    multiplayer: function() {
        var game = dbSudoku.findOne(Session.get('sudokuId'));
        if (game !== undefined) {
            return (game.players.length > 1)
        }
    },

    otherPlayer: function() {
        var reactiveVar = Template.instance().otherPlayer;
        if (reactiveVar.get() != null) {
            return reactiveVar.get();
        }
        else {
            var game = dbSudoku.findOne(Session.get('sudokuId'));
            var result = null;
            game.players.forEach(function(player) {
                if (player != Meteor.userId()) {
                    Meteor.call('fetchUserProfile', player, function(err, data) {
                        reactiveVar.set(data);
                        result = data;
                    });
                }
            });
            return result;
        }
    }
});

Template.sudoku.onCreated(function() {
    this.gameClosed = false;
    this.sudoku = new ReactiveVar();
    this.otherPlayer = new ReactiveVar();
    runtime.set(0);
});


Template.sudoku.events({
    'click .cell': function(e) {
        var cell = $(e.target).closest('.cell');
        var col = $(cell).attr('data-col');
        var row = $(cell).attr('data-row');

        if ($(cell).attr('data-fixed') == 'true') {
            // fixed value, don't do anything
            $('#number-select').hide();
            $('.cell.selected').removeClass('selected');
        }
        else {
            // highlight selected cell and show number pad
            $('#number-select').attr('data-col', col).attr('data-row', row).show();
            $('.cell.selected').removeClass('selected');
            $(cell).addClass('selected').removeClass('observe');
        }

        // highlight cells
        var cellNumber = $(cell).text().trim();
        if (cellNumber != '') {
            $('.cell').removeClass('observe');
            $('.cell').each(function(index, item) {
                if ($(item).text().trim() == cellNumber) {
                    $(item).addClass('observe');
                }
            });
        }
    },


    'click #number-select .number': function(e) {

        var col = $('#number-select').attr('data-col');
        var row = $('#number-select').attr('data-row');
        var action = ($(e.target).closest('.number').attr('data-action'));

        if (action == 'delete') {
            var game = dbSudoku.findOne(Session.get('sudokuId'));
            game = updateGame(game, row, col, null);
            checkGame(game);
        }
        else if (action == 'close') {
            // do nothing, closing number pad below
        }
        else {
            var number = $(e.target).closest('.number').text();
            var game = dbSudoku.findOne(Session.get('sudokuId'));
            updateGame(game, row, col, number);

            // highlight all cells with the same value
            setTimeout(function() {
                $('.cell').removeClass('observe');
                $('.cell').each(function(index, item) {
                    if ($(item).text().trim() == number) {
                        $(item).addClass('observe');
                    }
                });
            }, 500);

        }

        $('#number-select').hide();
    }
});