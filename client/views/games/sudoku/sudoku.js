/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
var runtime = new ReactiveVar(0);


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
        return dbSudoku.find().fetch()[0];
    }
});


Template.sudoku.events({
    'click .cell': function(e) {

    }
});