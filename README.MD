# Sudoku Wars by Team Armageddon

Contribution to the [Meteor Worldwide Distributed Hackathon 2015](http://meteor-2015.devpost.com/). Team based in Melbourne, Australia.

Project Presentation: [http://devpost.com/software/armageddon](http://devpost.com/software/armageddon)

## Runtime Instructions

The system operates on the concept of arenas. Arenas are stored in the database and hold geo coordinates.
The tool is currently configured to access arenas within a 3km radius. If you live further away from an arena and still
want to play, simply add another arena into the `server/init/dbinit.js` file or add it directly to the database.
When adding new arenas, please make sure to not violate the schema definition, which may cause server startup errors.

There are 2 existing users with a profile picture (credentials: test/test or admin/admin).
Newly registered users sadly cannot add a profile photo as we haven't bothered to implement an user account management
view.

Multiplayer is only possible with 2 different users accessing the multiplayer section (play Co-Op) at the same time.