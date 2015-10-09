/**
 * Publications for the 'users' collection.
 */
Meteor.publish('allUsers', function() {
    return Meteor.users.find({}, { _id: 1, profile: 1, username: 1, emails: 1 });
});