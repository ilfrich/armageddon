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
            name: "Melbourne Cricket Ground",
            location: {
                latitude: -37.8194921618419,
                longitude: 144.983402879078
            }
        },
        {
            type: "Code Shoppe",
            name: "Meteor HQ",
            location: {
                latitude: 37.77468959999999,
                longitude: -122.41546270000003
            }
        }

    ];

    arenas.forEach(function(arena) {
        dbArena.insert(arena);
    });




    var player = Meteor.users.findOne({ username: 'test' });
    var sudoku = {
        players: [player._id],
        mode: 'single',
        rows: [
            {
                rowNumber: 1,
                fields: [
                    { colNumber: 1 },
                    { colNumber: 2, value: 3 },
                    { colNumber: 3 },
                    { colNumber: 4, value: 9 },
                    { colNumber: 5 },
                    { colNumber: 6, value: 4 },
                    { colNumber: 7 },
                    { colNumber: 8, value: 8 },
                    { colNumber: 9 }
                ]
            },
            {
                rowNumber: 2,
                fields: [
                    { colNumber: 1 },
                    { colNumber: 2 },
                    { colNumber: 3 },
                    { colNumber: 4, value: 6 },
                    { colNumber: 5 },
                    { colNumber: 6, value: 7 },
                    { colNumber: 7 },
                    { colNumber: 8 },
                    { colNumber: 9 }
                ]
            },
            {
                rowNumber: 3,
                fields: [
                    { colNumber: 1, value: 6},
                    { colNumber: 2, value: 5 },
                    { colNumber: 3 },
                    { colNumber: 4 },
                    { colNumber: 5, value: 1 },
                    { colNumber: 6 },
                    { colNumber: 7 },
                    { colNumber: 8, value: 3 },
                    { colNumber: 9, value: 4 }
                ]
            },
            {
                rowNumber: 4,
                fields: [
                    { colNumber: 1 },
                    { colNumber: 2, value: 6 },
                    { colNumber: 3, value: 7 },
                    { colNumber: 4 },
                    { colNumber: 5 },
                    { colNumber: 6 },
                    { colNumber: 7, value: 1 },
                    { colNumber: 8, value: 2 },
                    { colNumber: 9 }
                ]
            },
            {
                rowNumber: 5,
                fields: [
                    { colNumber: 1, value: 5 },
                    { colNumber: 2 },
                    { colNumber: 3 },
                    { colNumber: 4 },
                    { colNumber: 5 },
                    { colNumber: 6 },
                    { colNumber: 7 },
                    { colNumber: 8 },
                    { colNumber: 9, value: 9 }
                ]
            },
            {
                rowNumber: 6,
                fields: [
                    { colNumber: 1 },
                    { colNumber: 2, value: 2 },
                    { colNumber: 3, value: 3 },
                    { colNumber: 4 },
                    { colNumber: 5 },
                    { colNumber: 6 },
                    { colNumber: 7, value: 8 },
                    { colNumber: 8, value: 6 },
                    { colNumber: 9 }
                ]
            },
            {
                rowNumber: 7,
                fields: [
                    { colNumber: 1, value: 2 },
                    { colNumber: 2, value: 4 },
                    { colNumber: 3 },
                    { colNumber: 4 },
                    { colNumber: 5, value: 7 },
                    { colNumber: 6 },
                    { colNumber: 7 },
                    { colNumber: 8, value: 1 },
                    { colNumber: 9, value: 6 }
                ]
            },
            {
                rowNumber: 8,
                fields: [
                    { colNumber: 1 },
                    { colNumber: 2 },
                    { colNumber: 3 },
                    { colNumber: 4, value: 1 },
                    { colNumber: 5 },
                    { colNumber: 6, value: 6 },
                    { colNumber: 7 },
                    { colNumber: 8 },
                    { colNumber: 9 }
                ]
            },
            {
                rowNumber: 9,
                fields: [
                    { colNumber: 1 },
                    { colNumber: 2, value: 9 },
                    { colNumber: 3 },
                    { colNumber: 4, value: 4 },
                    { colNumber: 5 },
                    { colNumber: 6, value: 8 },
                    { colNumber: 7 },
                    { colNumber: 8, value: 5 },
                    { colNumber: 9 }
                ]
            }
        ],
        timeTaken: 0,
        started: new Date()
    }

    if (dbSudoku.find().count() == 0) {
        dbSudoku.insert(sudoku);
    }

});
