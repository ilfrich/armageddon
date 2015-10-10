/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
Meteor.publish('allSudoku', function() {
    return dbSudoku.find();
});