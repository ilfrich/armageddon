/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
Template.sudoku.helpers({
    currentGame: function() {
        return dbSudoku.findOne();
    }
});