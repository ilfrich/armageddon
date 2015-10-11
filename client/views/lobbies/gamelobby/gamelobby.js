/**
 * Created by Peter Ilfrich
 * Copyright (c) 2015 IBM Research. All rights reserved.
 *
 *
 */
Template.gamelobby.helpers({
    aloneInLobby: function() {
        var lobby = this.lobby;
        if (lobby !== undefined && lobby.users !== undefined) {
            return (lobby.users.length == 1);
        }
        else {
            return true;
        }
    },

    connectPlayers: function() {
        var lobby = this.lobby;
        var arena = this.arena;

        if (lobby.users[lobby.users.length - 1] == Meteor.userId()) {
            Meteor.call('createSudokuGame', arena._id, 'coop', function(err, data) {
                if (err) {
                    sAlert.error('Connection failed.');
                    setTimeout(function() {
                        Router.go('/arena/' + arena._id);
                    }, 1000);
                }
                else {
                    Session.set('sudokuId', data);
                    Meteor.call('addPlayerToGame', data, lobby.users[lobby.users.length - 2], function(err, data) {
                        Router.go('/arena/' + arena._id + '/game/sudoku');
                    });
                }
            });
        }
    },

    checkJoin: function() {
        if (Meteor.user().profile.joinGame !== undefined) {
            var gameId = Meteor.user().profile.joinGame;
            var profile = Meteor.user().profile;
            delete profile.joinGame;

            var self = this;
            Meteor.call('updateProfile', Meteor.userId(), profile, function(err, data) {
                Session.set('sudokuId', gameId);
                Router.go('/arena/' + self.arena._id + '/game/sudoku');
            });
        }
    }
});