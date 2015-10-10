/**
 * Database Migration. This is executed on every server start. Each migration script should check for the conditions of
 * it's execution and only modify records that need migration. Once all records are migrated and the code doesn't
 * produce "old" records anymore, the migration script can be commented out - keep them commented out (and don't delete
 * them) to have a record of what has been ran in the past.
 */
Meteor.startup(function() {


    dbSudoku.find().forEach(function(su) {
        // make sure all games have the fixed flag on the fields
        if (su.rows[0].fields[0].fixed === undefined) {
            dbSudoku.remove({ _id: su._id });
        }
    });

});