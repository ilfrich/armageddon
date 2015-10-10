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
                    f.value = newValue;

                }
                newFields.push(f);
            });
            r.rows = newFields;
        }
        newRows.push(r);
    });

    dbSudoku.update({ _id: game._id }, { $set: {
        rows: newRows
    }});
}


Template.sudoku.onCreated(function() {
    this.sudoku = new ReactiveVar();
});

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
        if (Template.instance().sudoku.get() == null) {
            Template.instance().sudoku.set(dbSudoku.find().fetch()[0]);
        }
        return dbSudoku.find().fetch()[0];
    }
});


Template.sudoku.events({
    'click .cell': function(e) {
        var cell = $(e.target).closest('.cell');
        var col = $(cell).attr('data-col');
        var row = $(cell).attr('data-row');

        $('#number-select').attr('data-col', col).attr('data-row', row).show();
    },


    'click #number-select .number': function(e, template) {
        var number = $(e.target).closest('.number').text();
        var game = template.sudoku.get();

        var col = $('#number-select').attr('data-col');
        var row = $('#number-select').attr('data-row');

        updateGame(game, row, col, number);
        if (checkGame(game)) {
            sAlert.success('Game Won!');
        }
        $('#number-select').hide();
    }
});