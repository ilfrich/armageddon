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
                name: 'Bob Smith',
                accessLevel: 1,
                picture:'obama.png'
            }
        },
        {
            username: 'admin',
            password: 'admin',
            email: 'admin@noemail.noemail',
            profile: {
                name: 'Steven Seagull',
                accessLevel: 2,
                picture:'trump.png'
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
            icon:'townhall',
            location: {
                latitude: -37.801098,
                longitude: 144.99352369999997
            }
        },
        {
            type: "Retail",
            name: "Queen Victoria Market",
            icon:'market',
            location: {
                latitude: -37.8075002018073,
                longitude: 144.957158515056
            }
        },
        {
            type: "Railway Station",
            name: "Flinders Street Railway Station",
            icon:'train',
            location: {
                latitude: -37.8179063007545,
                longitude: 144.967064817875
            }
        },
        {
            type: "Public Buildings",
            name: "Melbourne Town Hall",
            icon:'townhall',
            location: {
                latitude: -37.8150754791411,
                longitude: 144.966542722283
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "Melbourne Cricket Ground",
            icon:'cricket',
            location: {
                latitude: -37.8194921618419,
                longitude: 144.983402879078
            }
        },
        {
            type: "Code Shoppe",
            name: "Meteor HQ",
            icon:'townhall',
            location: {
                latitude: 37.77468959999999,
                longitude: -122.41546270000003
            }
        },
        {
            type: "Railway Station",
            name: "Dematagoda Railway",
            icon:'train',
            location: {
                latitude: 6.944442,
                longitude: 79.879216
            }
        },
        {
            type: "Railway Station",
            name: "Narahenpita Railway",
            icon:'train',
            location: {
                latitude: 6.901438,
                longitude: 79.877759
            }
        },
        {
            type: "Code Shoppe",
            name: "Q42",
            icon:'townhall',
            location: {
                latitude: 52.069515,
                longitude: 4.323509
            }
        },
        {
            type: "Railway Station",
            name: "DEN HAAG HS",
            icon:'train',
            location: {
                latitude: 52.070346,
                longitude: 4.322264
            }
        },
        {
            type: "Church",
            name: "St. Patrick's Cathedral",
            icon:'townhall',
            location: {
                latitude: 40.758683,
                longitude: -73.975993
            }
        },
        {
            type: "Railway Station",
            name: "Grand Central - 42 St",
            icon:'train',
            location: {
                latitude: 40.752677,
                longitude: -73.977425
            }
        },
        {
            type: "Transport Interchange",
            name: "9TH and Market",
            icon:'train',
            location: {
                latitude: 37.777678,
                longitude: -122.416261
            }
        },
        {
            type: "Tram stop",
            name: "Lincoln Square/Swanston St",
            icon:'train',
            location: {
                latitude: -37.802384,
                longitude: 144.963651
            }
        },
        {
            type: "Code Shoppe",
            name: "IBM Research",
            icon:'twonhall',
            location: {
                latitude: -37.802110,
                longitude: 144.966973
            }
        }
    ];


    if(dbArena.find().count()<1){
        arenas.forEach(function(arena) {
            arena.ranking = [];
            arena.ranking.push(
                { userId: Meteor.users.findOne({ username: 'test' })._id,
                  points: 100,
                  gamesCount: 1
                }
            );
            arena.ranking.push(
                { userId: Meteor.users.findOne({ username: 'admin' })._id,
                  points: 1000,
                  gamesCount: 2
                }
            );

            dbArena.insert(arena);
        });
    }


});
