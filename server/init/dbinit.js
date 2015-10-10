/**
 * Database Initialization / Fixtures. If you have a lot of fixtures, create multiple files like initEntries or
 * initCategories.
 */
Meteor.startup(function() {

    /*
     * A standard user (accessLevel 1) and an admin user (accessLevel 2)
     * A unique username, a unique email address and a password are mandatory.
     */
    var demoUsers = [


        {
            username: 'test',
            password: 'test',
            email: 'test@noemail.noemail',
            profile: {
                name: 'Test Test',
                accessLevel: 1
            }
        },
        {
            username: 'admin',
            password: 'admin',
            email: 'admin@noemail.noemail',
            profile: {
                name: 'Admin Admin',
                accessLevel: 2
            }
        }
    ];

    // check if the user already exists, and if not insert it.
    demoUsers.forEach(function(user) {
        var userAlreadyExists = typeof Meteor.users.findOne({ username: user.username }) === 'object';
        if (!userAlreadyExists) {
            Accounts.createUser(user);
        }
    });


    /**
     * Import arenas
     */
    var arenas = [
        {
            type: "Code Shoppe",
            name: "Common Code",
            location: {
                latitude: -37.801098,
                longitude: 144.99352369999997
            }
        },
        {
            type: "Retail",
            name: "Queen Victoria Market",
            location: {
                latitude: -37.8075002018073,
                longitude: 144.957158515056
            }
        },
        {
            type: "Railway Station",
            name: "Flinders Street Railway Station",
            location: {
                latitude: -37.8179063007545,
                longitude: 144.967064817875
            }
        },
        {
            type: "Public Buildings",
            name: "Melbourne Town Hall",
            location: {
                latitude: -37.8150754791411,
                longitude: 144.966542722283
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "Melbourne Cricket Ground (MCG",
            location: {
                latitude: -37.8194921618419,
                longitude: 144.983402879078
            }
        }

    ];


    if(dbArena.find().count()<1){
        arenas.forEach(function(arena) {
            dbArena.insert(arena);
        });
    }


});
