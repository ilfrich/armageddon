/**
 * Server-side methods related to users.
 */
Meteor.methods({
    /**
     * Retrieves a list of all users in the system with a compact user profile (not exposing any security related data)
     * @returns {Array} - a list of compact user objects
     */
    allUsers: function() {
        var userList = Meteor.users.find().fetch();

        var result = new Array();
        userList.forEach(function(user) {
            result.push({
                name: user.profile.name,
                email: user.emails[0].address,
                accessLevel: user.profile.accessLevel,
                _id: user._id
            });
        });

        return result;
    },

    /**
     * Search for a user by their profile.name using a case-insensitive search for "*search*" - the intended use-case
     * is a suggest search / user find input field.
     *
     * @param search - the search term
     * @returns {Array} - a list of matching users names
     */
    searchUser: function(search) {
        var result = []
        Meteor.users.find({
            'profile.name': new RegExp(search, 'i')
        }).forEach(function(user) {
            result.push(user.profile.name);
        });
        return result;
    },

    /**
     * Returns a user that matches the given name. Only the id, username, emails and the profile are returned.
     * @param name - the profile name of the user
     * @returns {*} - a compact user object or undefined if the profile name cannot be resolved.
     */
    checkUserName: function(name) {
        return Meteor.users.findOne({ 'profile.name': name }, { _id: 1, profile: 1, username: 1, emails: 1});
    },

    fetchUserMap: function(userIdList) {
      var result = new Array();
      var user = null;

      userIdList.forEach(function(id) {
          user = Meteor.users.findOne(id);
          result.push({
            id: user._id,
            name: user.profile.name
          });
      });
      console.log(result);
      return result;
    }

});
