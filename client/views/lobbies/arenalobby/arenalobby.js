Template.arenalobby.helpers({
});

Template.arenalobby.events({
    'click button[data-action="play-game"]': function(e) {
        Meteor.call('createSudokuGame', Router.current().params.arenaId, 'single', function(err, data) {
            if (err) {
                sAlert.error('Ooops, the game could not be created.')
            }
            else {

                Session.set('sudokuId', data);
                Router.go('/arena/' + Router.current().params.arenaId + '/game/sudoku');
            }
        });
    }
});

Template.arenalobby.rendered=function(){

}
