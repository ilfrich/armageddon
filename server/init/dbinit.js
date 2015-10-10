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
            type: "Railway Station",
            name: "Victoria Park",
            location: {
              latitude: -37.799167,
              longitude: 144.994444
            }
        },
        {
            type: "Railway Station",
            name: "Flemington Bridge Railway Station",
            location: {
              latitude: -37.7881645889621,
              longitude: 144.939277838304
            }
        },
        {
            type: "Retail/Office/Carpark",
            name: "Council House 2 (CH2",
            location: {
              latitude: -37.8142591432011,
              longitude: 144.966638432727
            }
        },
        {
            type: "Library",
            name: "The Melbourne Athenaeum Library",
            location: {
              latitude: -37.8148855756416,
              longitude: 144.967291289941
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Carlton Gardens South",
            location: {
              latitude: -37.8060684577258,
              longitude: 144.971266479841
            }
        },
        {
            type: "Church",
            name: "St Francis Church",
            location: {
              latitude: -37.8118847831837,
              longitude: 144.962422614541
            }
        },
        {
            type: "Church",
            name: "Wesley Church",
            location: {
              latitude: -37.8101576446961,
              longitude: 144.968168215633
            }
        },
        {
            type: "Church",
            name: "St Augustines Church",
            location: {
              latitude: -37.8169741358546,
              longitude: 144.954862000132
            }
        },
        {
            type: "Church",
            name: "St James Church",
            location: {
              latitude: -37.8101281201969,
              longitude: 144.952468571683
            }
        },
        {
            type: "Church",
            name: "St Mary's Anglican Church",
            location: {
              latitude: -37.8031663672997,
              longitude: 144.953761537074
            }
        },
        {
            type: "Church",
            name: "Romanian Orthodox",
            location: {
              latitude: -37.8052307297468,
              longitude: 144.966986444597
            }
        },
        {
            type: "Church",
            name: "Welsh Presbyterian Church",
            location: {
              latitude: -37.8104478768313,
              longitude: 144.959873260087
            }
        },
        {
            type: "Church",
            name: "Church of Christ",
            location: {
              latitude: -37.8104524079085,
              longitude: 144.96388920294
            }
        },
        {
            type: "Church",
            name: "Scots Church",
            location: {
              latitude: -37.8145687802664,
              longitude: 144.96855105335
            }
        },
        {
            type: "Church",
            name: "St Michael's Uniting Church",
            location: {
              latitude: -37.8143851324913,
              longitude: 144.969174036096
            }
        },
        {
            type: "Church",
            name: "Greek Orthodox Church",
            location: {
              latitude: -37.8088064667555,
              longitude: 144.978259089269
            }
        },
        {
            type: "Church",
            name: "St Peter's Eastern Hill",
            location: {
              latitude: -37.8097086714637,
              longitude: 144.975259178609
            }
        },
        {
            type: "Church",
            name: "Lutheran Trinity Church",
            location: {
              latitude: -37.8109757054396,
              longitude: 144.975729473552
            }
        },
        {
            type: "Church",
            name: "Holy Trinity",
            location: {
              latitude: -37.8140667110854,
              longitude: 144.983197322289
            }
        },
        {
            type: "Church",
            name: "St Johns Lutheran Church",
            location: {
              latitude: -37.8209399677168,
              longitude: 144.967121099857
            }
        },
        {
            type: "Church",
            name: "North Melbourne Uniting",
            location: {
              latitude: -37.8035538471344,
              longitude: 144.947671538375
            }
        },
        {
            type: "Church",
            name: "Melbourne Unitarian Church",
            location: {
              latitude: -37.8114487773394,
              longitude: 144.984664890999
            }
        },
        {
            type: "Church",
            name: "All Nations Uniting Church",
            location: {
              latitude: -37.7959155303946,
              longitude: 144.968981110942
            }
        },
        {
            type: "Church",
            name: "Our Lady of Lebanon Church",
            location: {
              latitude: -37.8025766539683,
              longitude: 144.969334720932
            }
        },
        {
            type: "Church",
            name: "St Michaels",
            location: {
              latitude: -37.7940512679297,
              longitude: 144.945399480629
            }
        },
        {
            type: "Church",
            name: "Ukranian Catholic Cathedral",
            location: {
              latitude: -37.7963084580345,
              longitude: 144.944313454028
            }
        },
        {
            type: "Church",
            name: "St Alban Anglican Church",
            location: {
              latitude: -37.7942169477929,
              longitude: 144.94161451392
            }
        },
        {
            type: "Church",
            name: "Christ Church Kensington",
            location: {
              latitude: -37.7932109480553,
              longitude: 144.92729572288
            }
        },
        {
            type: "Church",
            name: "Holy Rosary",
            location: {
              latitude: -37.7948087414394,
              longitude: 144.928362125005
            }
        },
        {
            type: "Church",
            name: "Collins Street Baptist Church",
            location: {
              latitude: -37.8147011904647,
              longitude: 144.968072486031
            }
        },
        {
            type: "Church",
            name: "St Thomas Aquinas Church",
            location: {
              latitude: -37.8353076902578,
              longitude: 144.976809080472
            }
        },
        {
            type: "Church",
            name: "South Yarra Presbyterian Church",
            location: {
              latitude: -37.8407473645397,
              longitude: 144.98562699348
            }
        },
        {
            type: "Church",
            name: "The Parish of Christ Church South Yarra",
            location: {
              latitude: -37.8386270533576,
              longitude: 144.986009385387
            }
        },
        {
            type: "Private Hospital",
            name: "Melbourne Private Hospital",
            location: {
              latitude: -37.7983111309698,
              longitude: 144.95728837725
            }
        },
        {
            type: "Synagogue",
            name: "East Melbourne Synagogue",
            location: {
              latitude: -37.809113728917,
              longitude: 144.97422190954
            }
        },
        {
            type: "Police Station",
            name: "Victoria Police",
            location: {
              latitude: -37.8164849024046,
              longitude: 144.966486801188
            }
        },
        {
            type: "Police Station",
            name: "Victoria Police",
            location: {
              latitude: -37.8003121288849,
              longitude: 144.954697453742
            }
        },
        {
            type: "Police Station",
            name: "Victoria Police",
            location: {
              latitude: -37.8219773910249,
              longitude: 144.953398014034
            }
        },
        {
            type: "Visitor Centre",
            name: "Melbourne Visitor Booth",
            location: {
              latitude: -37.8139525061193,
              longitude: 144.964425882562
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "State Netball Hockey Centre",
            location: {
              latitude: -37.7857860016289,
              longitude: 144.947580972027
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "University Square",
            location: {
              latitude: -37.800410711209,
              longitude: 144.960398319302
            }
        },
        {
            type: "Transport Terminal",
            name: "Port of Melbourne",
            location: {
              latitude: -37.8137384362671,
              longitude: 144.91753432375
            }
        },
        {
            type: "Private Sports Club/Facility",
            name: "Royal Park Golf Course",
            location: {
              latitude: -37.7819171308558,
              longitude: 144.956309119368
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Powlett Reserve",
            location: {
              latitude: -37.8116929882498,
              longitude: 144.987275671763
            }
        },
        {
            type: "Cemetery",
            name: "Melbourne General Cemetery",
            location: {
              latitude: -37.7891890023616,
              longitude: 144.965785979892
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "Carlton Football Club",
            location: {
              latitude: -37.7840864379557,
              longitude: 144.961967841559
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "Visy Park",
            location: {
              latitude: -37.7834303940347,
              longitude: 144.961982577553
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
            type: "Primary Schools",
            name: "Carlton Gardens Primary School",
            location: {
              latitude: -37.8020953835112,
              longitude: 144.969406272035
            }
        },
        {
            type: "Primary Schools",
            name: "Carlton Primary School",
            location: {
              latitude: -37.7959079757171,
              longitude: 144.970147317976
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Carlton Gardens North",
            location: {
              latitude: -37.8017690847403,
              longitude: 144.971997551189
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Old Melbourne Gaol Crime & Justice Experience",
            location: {
              latitude: -37.8077644149636,
              longitude: 144.965463853978
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Kings Domain",
            location: {
              latitude: -37.8255239795833,
              longitude: 144.974107925144
            }
        },
        {
            type: "Secondary Schools",
            name: "Melbourne Grammar School",
            location: {
              latitude: -37.8342561018747,
              longitude: 144.976285045233
            }
        },
        {
            type: "School - Primary and Secondary Education",
            name: "Wesley College",
            location: {
              latitude: -37.8485201804496,
              longitude: 144.982227770988
            }
        },
        {
            type: "Theatre Live",
            name: "FairFax Studio",
            location: {
              latitude: -37.8216684581887,
              longitude: 144.968836241692
            }
        },
        {
            type: "Theatre Live",
            name: "Playhouse",
            location: {
              latitude: -37.8218124583016,
              longitude: 144.968337832721
            }
        },
        {
            type: "Theatre Live",
            name: "State Theatre",
            location: {
              latitude: -37.8212806349773,
              longitude: 144.968469643744
            }
        },
        {
            type: "Tertiary (University",
            name: "University of Melbourne (VCA and Music",
            location: {
              latitude: -37.8241137662047,
              longitude: 144.96933253996
            }
        },
        {
            type: "Theatre Live",
            name: "St Martins Youth Arts Centre",
            location: {
              latitude: -37.8352429531289,
              longitude: 144.98114217385
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "Flemington Racecourse",
            location: {
              latitude: -37.7908082646624,
              longitude: 144.912142987372
            }
        },
        {
            type: "Railway Station",
            name: "Southern Cross Railway Station",
            location: {
              latitude: -37.8181633057171,
              longitude: 144.952944748845
            }
        },
        {
            type: "Theatre Live",
            name: "Princess Theatre",
            location: {
              latitude: -37.8107257091302,
              longitude: 144.9723265962
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Treasury Gardens",
            location: {
              latitude: -37.8143993575938,
              longitude: 144.975952335785
            }
        },
        {
            type: "Secondary Schools",
            name: "University High School",
            location: {
              latitude: -37.7973136216903,
              longitude: 144.956034449946
            }
        },
        {
            type: "Public Buildings",
            name: "State Library Victoria",
            location: {
              latitude: -37.8099852201226,
              longitude: 144.964330322397
            }
        },
        {
            type: "Theatre Live",
            name: "Regent Theatre",
            location: {
              latitude: -37.8160014744179,
              longitude: 144.967916735261
            }
        },
        {
            type: "Retail/Office",
            name: "Treasury Reserve",
            location: {
              latitude: -37.8129178793082,
              longitude: 144.975236759799
            }
        },
        {
            type: "Office",
            name: "Old Treasury Building",
            location: {
              latitude: -37.8132371662585,
              longitude: 144.974423610255
            }
        },
        {
            type: "Private Hospital",
            name: "Epworth Freemasons Hospital : Medical Centre",
            location: {
              latitude: -37.8093444587231,
              longitude: 144.982336768182
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Batman Park",
            location: {
              latitude: -37.8218460949601,
              longitude: 144.956665812218
            }
        },
        {
            type: "Office",
            name: "Australian Red Cross",
            location: {
              latitude: -37.7990921023192,
              longitude: 144.952635945774
            }
        },
        {
            type: "Government Building",
            name: "Melbourne Magistrates Court",
            location: {
              latitude: -37.8136147671606,
              longitude: 144.956846193891
            }
        },
        {
            type: "Railway Station",
            name: "Flagstaff Railway Station",
            location: {
              latitude: -37.8122356514626,
              longitude: 144.956318211113
            }
        },
        {
            type: "Public Buildings",
            name: "Supreme Court",
            location: {
              latitude: -37.8141494182814,
              longitude: 144.957894024264
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Richmond Football Club",
            location: {
              latitude: -37.8216740022008,
              longitude: 144.988156318781
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "Melbourne Cricket Ground (MCG",
            location: {
              latitude: -37.8194921618419,
              longitude: 144.983402879078
            }
        },
<<<<<<< HEAD

=======
        {
            type: "Outdoor Recreation Facility (Zoo,
              longitude: Golf Course",
            name: "Melbourne Zoo",
            location: {
              latitude: -37.7844449253712,
              longitude: 144.951371205938
            }
        },
>>>>>>> 5ca6568a019f1f5b34912846015cd417446aa59a
        {
            type: "Office",
            name: "Australian Broadcasting Corporation (ABC",
            location: {
              latitude: -37.823813323734,
              longitude: 144.966551401578
            }
        },
        {
            type: "Function/Conference/Exhibition Centre",
            name: "Melbourne Exhibition Centre",
            location: {
              latitude: -37.8252455123297,
              longitude: 144.95435243249
            }
        },
        {
            type: "Function/Conference/Exhibition Centre",
            name: "Melbourne Convention Centre",
            location: {
              latitude: -37.8249040484653,
              longitude: 144.952288281644
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Polly Woodside",
            location: {
              latitude: -37.8242574266145,
              longitude: 144.953478052064
            }
        },
        {
            type: "Vacant Land - Undeveloped Site",
            name: "Melbourne International Karting Complex",
            location: {
              latitude: -37.8310746380616,
              longitude: 144.913822928701
            }
        },
        {
            type: "Private Sports Club/Facility",
            name: "Melbourne International Shooting Club",
            location: {
              latitude: -37.8292844929826,
              longitude: 144.913415802464
            }
        },
        {
            type: "Retail/Office/Carpark",
            name: "Southgate Arts and Leisure Precinct",
            location: {
              latitude: -37.8202245786597,
              longitude: 144.965989052839
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Australian Centre for Contemporary Art",
            location: {
              latitude: -37.8266045432686,
              longitude: 144.967252924593
            }
        },
        {
            type: "Theatre Live",
            name: "Malthouse Theatre",
            location: {
              latitude: -37.8271768001126,
              longitude: 144.966936821789
            }
        },
        {
            type: "Church",
            name: "St Patricks Cathedral",
            location: {
              latitude: -37.8101140950474,
              longitude: 144.975901529712
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Victorian Arts Centre",
            location: {
              latitude: -37.8219947335768,
              longitude: 144.968837288153
            }
        },
        {
            type: "Office",
            name: "Parliament House",
            location: {
              latitude: -37.811246655376,
              longitude: 144.97372641185
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
            type: "Office",
            name: "Former Royal Mint",
            location: {
              latitude: -37.8121838748712,
              longitude: 144.957055454136
            }
        },
        {
            type: "Retail/Office",
            name: "DFO South Wharf",
            location: {
              latitude: -37.824887401234,
              longitude: 144.949794297819
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Queen Victoria Gardens",
            location: {
              latitude: -37.8216381244891,
              longitude: 144.971049530478
            }
        },
        {
            type: "Public Buildings",
            name: "Sidney Myer Music Bowl",
            location: {
              latitude: -37.8233471608733,
              longitude: 144.974686151365
            }
        },
        {
            type: "Casino",
            name: "Crown Entertainment Complex",
            location: {
              latitude: -37.8235761092516,
              longitude: 144.957312880653
            }
        },
        {
            type: "Public Hospital",
            name: "The Royal Victorian Eye & Ear Hospital",
            location: {
              latitude: -37.8087522829868,
              longitude: 144.976268275082
            }
        },
        {
            type: "Office",
            name: "SBS (Special Broadcasting Service",
            location: {
              latitude: -37.8176921210305,
              longitude: 144.968740597156
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "The Ian Potter Centre: NGV Australia",
            location: {
              latitude: -37.8174831423197,
              longitude: 144.969899048343
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Federation Square",
            location: {
              latitude: -37.8178516571684,
              longitude: 144.968963600783
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Thoroughbred Racing Gallery",
            location: {
              latitude: -37.8188662730911,
              longitude: 144.9839700954
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "New Quay",
            location: {
              latitude: -37.8152178789077,
              longitude: 144.941617889032
            }
        },
        {
            type: "Film & RV Studio",
            name: "Central City Studios",
            location: {
              latitude: -37.8142318521296,
              longitude: 144.935655305362
            }
        },
        {
            type: "Film & RV Studio",
            name: "Channel 7 - Melbourne Broadcast Centre",
            location: {
              latitude: -37.8158572333481,
              longitude: 144.94582326909
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Docklands Park",
            location: {
              latitude: -37.8209956785618,
              longitude: 144.946781702342
            }
        },
        {
            type: "Retail/Office",
            name: "Waterfront City",
            location: {
              latitude: -37.815056661803,
              longitude: 144.939136876334
            }
        },
        {
            type: "Current Construction Site",
            name: "Harbour Town",
            location: {
              latitude: -37.8139256326845,
              longitude: 144.938123825625
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "AAMI Park",
            location: {
              latitude: -37.8247252673963,
              longitude: 144.98380297866
            }
        },
        {
            type: "Marina",
            name: "New Quay Marina",
            location: {
              latitude: -37.8152925454954,
              longitude: 144.942283726231
            }
        },
        {
            type: "Function/Conference/Exhibition Centre",
            name: "Central Pier",
            location: {
              latitude: -37.8165177307702,
              longitude: 144.943475014215
            }
        },
        {
            type: "Observation Tower/Wheel",
            name: "Melbourne Star Observation Wheel",
            location: {
              latitude: -37.8116163666726,
              longitude: 144.937588920436
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Point Park",
            location: {
              latitude: -37.8233522700646,
              longitude: 144.942102276731
            }
        },
        {
            type: "Primary Schools",
            name: "Kensington Primary School",
            location: {
              latitude: -37.7925235045455,
              longitude: 144.927108735461
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Newmarket Reserve",
            location: {
              latitude: -37.7878473341234,
              longitude: 144.922972125346
            }
        },
        {
            type: "Public Hospital",
            name: "Royal Womens Hospital",
            location: {
              latitude: -37.7988892460088,
              longitude: 144.954897253856
            }
        },
        {
            type: "Further Education",
            name: "Kangan Batman Tafe",
            location: {
              latitude: -37.8221818203024,
              longitude: 144.948908460665
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Fox Classic Car Collection",
            location: {
              latitude: -37.8213744301481,
              longitude: 144.948496661709
            }
        },
        {
            type: "Hostel",
            name: "The Mission To Seafarers Victoria",
            location: {
              latitude: -37.8224995970811,
              longitude: 144.951254841448
            }
        },
        {
            type: "Current Construction Site - Commercial",
            name: "Railway Good Shed No 2",
            location: {
              latitude: -37.8211371302179,
              longitude: 144.951378883631
            }
        },
<<<<<<< HEAD

=======
        {
            type: "Outdoor Recreation Facility (Zoo,
              longitude: Golf Course",
            name: "Wonderland Park",
            location: {
              latitude: -37.8116945351989,
              longitude: 144.936833674975
            }
        },
>>>>>>> 5ca6568a019f1f5b34912846015cd417446aa59a
        {
            type: "Major Sports & Recreation Facility",
            name: "Rod Laver Arena",
            location: {
              latitude: -37.8220456119807,
              longitude: 144.978487173787
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "Melbourne Park",
            location: {
              latitude: -37.8209085970021,
              longitude: 144.978735802793
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "Margaret Court Arena",
            location: {
              latitude: -37.8213252086842,
              longitude: 144.977591098955
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "Hisense Arena",
            location: {
              latitude: -37.823110002667,
              longitude: 144.981834802535
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Melbourne Museum",
            location: {
              latitude: -37.8035518129299,
              longitude: 144.971690718887
            }
        },
        {
            type: "Cinema",
            name: "IMAX Melbourne",
            location: {
              latitude: -37.8034315561903,
              longitude: 144.970639929886
            }
        },
        {
            type: "Public Buildings",
            name: "Melbourne Theatre Company",
            location: {
              latitude: -37.823930384816,
              longitude: 144.968297429894
            }
        },
        {
            type: "Theatre Live",
            name: "MTC Theatre",
            location: {
              latitude: -37.8242661832902,
              longitude: 144.968174400274
            }
        },
        {
            type: "Public Buildings",
            name: "Elisabeth Murdoch Hall",
            location: {
              latitude: -37.8239733704282,
              longitude: 144.967450979234
            }
        },
        {
            type: "Public Buildings",
            name: "Melbourne Recital Centre",
            location: {
              latitude: -37.8238327885805,
              longitude: 144.967682729667
            }
        },
        {
            type: "Public Buildings",
            name: "NGV International",
            location: {
              latitude: -37.8230135000869,
              longitude: 144.969342535451
            }
        },
        {
            type: "Theatre Live",
            name: "Hamer Hall",
            location: {
              latitude: -37.8199901009015,
              longitude: 144.967992144257
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Birrarung Marr",
            location: {
              latitude: -37.81806108403,
              longitude: 144.97314667014
            }
        },
        {
            type: "Indoor Recreation Facility",
            name: "Artplay",
            location: {
              latitude: -37.8184198800044,
              longitude: 144.971542586509
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Riverslide Skate Park",
            location: {
              latitude: -37.8207887122448,
              longitude: 144.972951789291
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Alexandra Gardens",
            location: {
              latitude: -37.8206051404251,
              longitude: 144.971796067365
            }
        },
        {
            type: "Railway Station",
            name: "Parliament Railway Station",
            location: {
              latitude: -37.8116061787171,
              longitude: 144.973017263156
            }
        },
        {
            type: "Railway Station",
            name: "Richmond Railway Station (Richmond) - Train stop",
            location: {
              latitude: -37.8238992659834,
              longitude: 144.989400751664
            }
        },
        {
            type: "Railway Station",
            name: "Jolimont-MCG Railway Station (East Melbourne) - Train stop",
            location: {
              latitude: -37.8165651811668,
              longitude: 144.983641003377
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "North Melbourne Recreation Reserve",
            location: {
              latitude: -37.7988345257153,
              longitude: 144.941452061463
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "J.J Holland Park",
            location: {
              latitude: -37.7982358832177,
              longitude: 144.923837074813
            }
        },
        {
            type: "Railway Station",
            name: "Macaulay Railway Station (North Melbourne) - Train stop",
            location: {
              latitude: -37.794964001386,
              longitude: 144.936190756632
            }
        },
        {
            type: "Railway Station",
            name: "Kensington Railway Station",
            location: {
              latitude: -37.7939140126373,
              longitude: 144.930710207518
            }
        },
        {
            type: "Railway Station",
            name: "South Kensington Railway Station",
            location: {
              latitude: -37.7997270537735,
              longitude: 144.925837749713
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Royal Park",
            location: {
              latitude: -37.7906174256581,
              longitude: 144.953834240647
            }
        },
        {
            type: "Public Hospital",
            name: "Royal Childrens Hospital",
            location: {
              latitude: -37.7942060847278,
              longitude: 144.950048264678
            }
        },
        {
            type: "Railway Station",
            name: "Royal Park Railway Station",
            location: {
              latitude: -37.7812684282825,
              longitude: 144.951667833921
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Princes Park",
            location: {
              latitude: -37.7870161727156,
              longitude: 144.961115214367
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "National Sports Museum",
            location: {
              latitude: -37.8189544909462,
              longitude: 144.984669809381
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Shrine of Rembrance Reserve",
            location: {
              latitude: -37.8320733992876,
              longitude: 144.973628364465
            }
        },
        {
            type: "Public Buildings",
            name: "Shrine of Remembrance",
            location: {
              latitude: -37.8302080020387,
              longitude: 144.973441913623
            }
        },
        {
            type: "Dwelling (House",
            name: "Government House",
            location: {
              latitude: -37.8275635886174,
              longitude: 144.976655130464
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Royal Botanic Gardens",
            location: {
              latitude: -37.8306631583233,
              longitude: 144.980850432751
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Yarra Park",
            location: {
              latitude: -37.820469374101,
              longitude: 144.986671109615
            }
        },
        {
            type: "Office",
            name: "Coronial Services Centre of Victoria",
            location: {
              latitude: -37.8243437355246,
              longitude: 144.96447462898
            }
        },
        {
            type: "Office",
            name: "Victorian Insitute of Forensic Medicine",
            location: {
              latitude: -37.8246924089335,
              longitude: 144.964979061564
            }
        },
        {
            type: "Office",
            name: "Donor Tissue Bank of Victoria",
            location: {
              latitude: -37.8248231859563,
              longitude: 144.965169035668
            }
        },
        {
            type: "Office",
            name: "State Coroners Office",
            location: {
              latitude: -37.8244982228756,
              longitude: 144.964675254819
            }
        },
        {
            type: "Indoor Recreation Facility",
            name: "Icehouse",
            location: {
              latitude: -37.8121881194053,
              longitude: 144.935684018873
            }
        },
        {
            type: "Railway Station",
            name: "Parliament Railway Station",
            location: {
              latitude: -37.8121572789173,
              longitude: 144.973742010011
            }
        },
        {
            type: "Railway Station",
            name: "Parliament Railway Station",
            location: {
              latitude: -37.8127621113552,
              longitude: 144.973433796529
            }
        },
        {
            type: "Railway Station",
            name: "Parliament Railway Station",
            location: {
              latitude: -37.8095762219384,
              longitude: 144.972330132127
            }
        },
        {
            type: "Railway Station",
            name: "Flagstaff Railway Station",
            location: {
              latitude: -37.8116384403974,
              longitude: 144.9561186805
            }
        },
        {
            type: "Railway Station",
            name: "Melbourne Central Railway Station",
            location: {
              latitude: -37.8097759325888,
              longitude: 144.962670059539
            }
        },
        {
            type: "Railway Station",
            name: "Melbourne Central Railway Station",
            location: {
              latitude: -37.8105992402369,
              longitude: 144.96169061383
            }
        },
        {
            type: "Railway Station",
            name: "Melbourne Central Railway Station",
            location: {
              latitude: -37.8108930047401,
              longitude: 144.963100728702
            }
        },
        {
            type: "Railway Station",
            name: "Flemington Racecourse Railway Station",
            location: {
              latitude: -37.7869105822519,
              longitude: 144.908190706069
            }
        },
        {
            type: "Railway Station",
            name: "Showgrounds Railway Station (Flemington",
            location: {
              latitude: -37.7834651216244,
              longitude: 144.914902626775
            }
        },
        {
            type: "Railway Station",
            name: "Newmarket Railway Station",
            location: {
              latitude: -37.7872726241965,
              longitude: 144.929059958114
            }
        },
        {
            type: "Theatre Live",
            name: "Athanaeum Theatre",
            location: {
              latitude: -37.814954347831,
              longitude: 144.96732254212
            }
        },
        {
            type: "Public Hospital",
            name: "Alfred Hospital",
            location: {
              latitude: -37.8462631206461,
              longitude: 144.981786260765
            }
        },
<<<<<<< HEAD

=======
        {
            type: "Outdoor Recreation Facility (Zoo,
              longitude: Golf Course",
            name: "Riverside Park",
            location: {
              latitude: -37.7948375315825,
              longitude: 144.915607065132
            }
        },
>>>>>>> 5ca6568a019f1f5b34912846015cd417446aa59a
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Darling Square",
            location: {
              latitude: -37.81299206932,
              longitude: 144.989062559512
            }
        },
        {
            type: "Theatre Live",
            name: "Carlton Courthouse Theatre",
            location: {
              latitude: -37.7976589943217,
              longitude: 144.968750113566
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Flagstaff Gardens",
            location: {
              latitude: -37.8111222889277,
              longitude: 144.954696055235
            }
        },
        {
<<<<<<< HEAD
=======
            type: "Outdoor Recreation Facility (Zoo,
              longitude: Golf Course",
            name: "Melbourne Showgrounds",
            location: {
              latitude: -37.7823097850883,
              longitude: 144.910822117306
            }
        },
        {
>>>>>>> 5ca6568a019f1f5b34912846015cd417446aa59a
            type: "Primary Schools",
            name: "North Melbourne Primary School",
            location: {
              latitude: -37.7986737155551,
              longitude: 144.951065772876
            }
        },
        {
            type: "Theatre Live",
            name: "Her Majesty's Theatre",
            location: {
              latitude: -37.8109975612842,
              longitude: 144.969520183129
            }
        },
        {
            type: "Theatre Live",
            name: "Comedy Theatre",
            location: {
              latitude: -37.8102053945163,
              longitude: 144.97013311862
            }
        },
        {
            type: "Theatre Live",
            name: "La Mama Theatre",
            location: {
              latitude: -37.7991304956733,
              longitude: 144.967669503083
            }
        },
        {
            type: "Industrial (Manufacturing",
            name: "Kraft",
            location: {
              latitude: -37.8262313085528,
              longitude: 144.923475698195
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Fawkner Park",
            location: {
              latitude: -37.8413996708186,
              longitude: 144.981625667877
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Fitzroy Gardens",
            location: {
              latitude: -37.8129616331579,
              longitude: 144.980455714669
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Sinclair's Cottage",
            location: {
              latitude: -37.8145407488014,
              longitude: 144.980554992725
            }
        },
        {
            type: "Tertiary (University",
            name: "BIO 21 Institute",
            location: {
              latitude: -37.7978743305343,
              longitude: 144.953780325865
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Enterprize Park",
            location: {
              latitude: -37.820210269629,
              longitude: 144.959276859602
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Victoria Police Museum",
            location: {
              latitude: -37.8222182774409,
              longitude: 144.954039975197
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Immigration Museum",
            location: {
              latitude: -37.8191798798062,
              longitude: 144.960426777129
            }
        },
        {
            type: "Church",
            name: "St Pauls Cathedral",
            location: {
              latitude: -37.8169549012399,
              longitude: 144.967681647402
            }
        },
        {
            type: "Theatre Live",
            name: "Forum Theatre",
            location: {
              latitude: -37.816485409696,
              longitude: 144.969386556998
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
            type: "Store Yard",
            name: "Melbourne Wholesale Fish Market",
            location: {
              latitude: -37.8083471006041,
              longitude: 144.930613255612
            }
        },
<<<<<<< HEAD

=======
        {
            type: "Retail/Office/Carpark",
            name: "Melbourne Wholesale Fruit,
              longitude: Vegetable & Flower Market",
            location: {
              latitude: -37.80687252157,
              longitude: 144.923287444259
            }
        },
>>>>>>> 5ca6568a019f1f5b34912846015cd417446aa59a
        {
            type: "Art Gallery/Museum",
            name: "Fire Services Museum Victoria",
            location: {
              latitude: -37.8085761281612,
              longitude: 144.975373745366
            }
        },
        {
            type: "Fire Station",
            name: "Metropolitan Fire Brigade (MFB",
            location: {
              latitude: -37.8092318636838,
              longitude: 144.975247619376
            }
        },
        {
            type: "Public Hospital",
            name: "Royal Melbourne Hospital",
            location: {
              latitude: -37.7993071664096,
              longitude: 144.956389746765
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "The Ian Potter Museum Of Art",
            location: {
              latitude: -37.7973939595503,
              longitude: 144.964156669702
            }
        },
        {
            type: "Tertiary (University",
            name: "University of Melbourne",
            location: {
              latitude: -37.7982892284927,
              longitude: 144.96099520158
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Koorie Heritage Trust Inc",
            location: {
              latitude: -37.8133854259085,
              longitude: 144.954027907736
            }
        },
        {
            type: "Public Buildings",
            name: "Commonwealth Law Courts",
            location: {
              latitude: -37.8123961677596,
              longitude: 144.955823833257
            }
        },
        {
            type: "Tertiary (University",
            name: "RMIT University",
            location: {
              latitude: -37.8080795360545,
              longitude: 144.964452974798
            }
        },
        {
            type: "Retail/Office/Carpark",
            name: "Melbourne Central",
            location: {
              latitude: -37.8105371797142,
              longitude: 144.962749729496
            }
        },
        {
            type: "Railway Station",
            name: "Melbourne Central Railway Station",
            location: {
              latitude: -37.8100167030855,
              longitude: 144.963789344893
            }
        },
        {
            type: "Retail/Office/Residential/Carpark",
            name: "QV Village",
            location: {
              latitude: -37.8106891897454,
              longitude: 144.965714574014
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Argyle Square",
            location: {
              latitude: -37.8031480577285,
              longitude: 144.965761295089
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Piazza Italia",
            location: {
              latitude: -37.8025164192523,
              longitude: 144.965863092947
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Macarthur Square",
            location: {
              latitude: -37.7983318676737,
              longitude: 144.971514146104
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Murchinson Square",
            location: {
              latitude: -37.8002735025371,
              longitude: 144.973059252203
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Parliament Reserve",
            location: {
              latitude: -37.809852620638,
              longitude: 144.973462202839
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "North Melbourne Recreation Centre (Aquatic",
            location: {
              latitude: -37.7999470049655,
              longitude: 144.943290801869
            }
        },
        {
            type: "Office",
            name: "North Melbourne Football Club",
            location: {
              latitude: -37.799771364073,
              longitude: 144.940963510723
            }
        },
        {
            type: "Gymnasium/Health Club",
            name: "North Melbourne Recreation Centre (Gymnasium",
            location: {
              latitude: -37.7997051197931,
              longitude: 144.940368286395
            }
        },
        {
            type: "Indoor Recreation Facility",
            name: "Carlton Baths",
            location: {
              latitude: -37.7934377042609,
              longitude: 144.971696548624
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "City Baths",
            location: {
              latitude: -37.8071585350561,
              longitude: 144.963189789721
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Westgate Park",
            location: {
              latitude: -37.8314918578874,
              longitude: 144.908824792698
            }
        },
        {
            type: "Railway Station",
            name: "North Melbourne Railway Station",
            location: {
              latitude: -37.8073823625058,
              longitude: 144.942429848025
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Cooks' Cottage",
            location: {
              latitude: -37.8144604899837,
              longitude: 144.979471339826
            }
        },
        {
            type: "Public Buildings",
            name: "Conservatory",
            location: {
              latitude: -37.814002127195,
              longitude: 144.9785597431
            }
        },
        {
            type: "Aquarium",
            name: "Melbourne Aquarium",
            location: {
              latitude: -37.8209627824685,
              longitude: 144.958425696055
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "Westpac Centre",
            location: {
              latitude: -37.8242456858593,
              longitude: 144.979720306309
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Royal Exhibition Building",
            location: {
              latitude: -37.80460262432,
              longitude: 144.971521914952
            }
        },
        {
            type: "Public Buildings",
            name: "Melbourne Childrens Court",
            location: {
              latitude: -37.8125077646598,
              longitude: 144.958298873269
            }
        },
        {
            type: "Major Sports & Recreation Facility",
            name: "Etihad Stadium",
            location: {
              latitude: -37.8161760471742,
              longitude: 144.947496254547
            }
        },
        {
            type: "Observation Tower/Wheel",
            name: "Eureka Skydeck 88",
            location: {
              latitude: -37.8216187583314,
              longitude: 144.964622218598
            }
        },
        {
            type: "Retail/Residential",
            name: "Eureka Tower",
            location: {
              latitude: -37.8215157539717,
              longitude: 144.964456721965
            }
        },
        {
            type: "Public Buildings",
            name: "County Court Melbourne",
            location: {
              latitude: -37.8132011619962,
              longitude: 144.957734246387
            }
        },
        {
            type: "Public Hospital",
            name: "Peter Maccallum Cancer Institute",
            location: {
              latitude: -37.8114766732026,
              longitude: 144.977400949063
            }
        },
        {
            type: "Public Hospital",
            name: "Royal Dental Hospital",
            location: {
              latitude: -37.7995065904416,
              longitude: 144.964526842767
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Sandridge Rail Bridge",
            location: {
              latitude: -37.8201763042794,
              longitude: 144.96298113724
            }
        },
        {
            type: "Retail/Office/Residential/Carpark",
            name: "Freshwater Place",
            location: {
              latitude: -37.8219745489446,
              longitude: 144.96246144843
            }
        },
        {
            type: "Visitor Centre",
            name: "Melbourne Visitor Centre",
            location: {
              latitude: -37.8177352402006,
              longitude: 144.967937138226
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "Australian Centre For The Moving Image (ACMI",
            location: {
              latitude: -37.8176107327202,
              longitude: 144.969070431323
            }
        },
        {
            type: "Bridge",
            name: "Webb Bridge",
            location: {
              latitude: -37.8232052384507,
              longitude: 144.947291011905
            }
        },
        {
            type: "Function/Conference/Exhibition Centre",
            name: "Dallas Brooks Centre",
            location: {
              latitude: -37.8097374138234,
              longitude: 144.981383411592
            }
        },
        {
            type: "School - Primary and Secondary Education",
            name: "Melbourne Girls Grammar School",
            location: {
              latitude: -37.8315364518803,
              longitude: 144.985089428348
            }
        },
        {
            type: "Department Store",
            name: "Myer",
            location: {
              latitude: -37.8135911985281,
              longitude: 144.963855087868
            }
        },
        {
            type: "Department Store",
            name: "David Jones",
            location: {
              latitude: -37.8133127260638,
              longitude: 144.964373486798
            }
        },
        {
            type: "Informal Outdoor Facility (Park/Garden/Reserve",
            name: "Lincoln Square",
            location: {
              latitude: -37.8027919689732,
              longitude: 144.962760852233
            }
        },
        {
            type: "Private Hospital",
            name: "Epworth Freemasons Hospital",
            location: {
              latitude: -37.8109710654051,
              longitude: 144.98370007659
            }
        },
        {
            type: "Dwelling (House",
            name: "Bishopscourt",
            location: {
              latitude: -37.8132921649416,
              longitude: 144.98350690799
            }
        },
        {
            type: "Medical Services",
            name: "Mercy Private Hospital",
            location: {
              latitude: -37.811896809802,
              longitude: 144.984435746587
            }
        },
        {
            type: "Art Gallery/Museum",
            name: "The Museum Of Australian Chinese History",
            location: {
              latitude: -37.8107686127655,
              longitude: 144.96923385414
            }
        },
        {
            type: "Retail/Office/Carpark",
            name: "ANZ 'Gothic' Bank",
            location: {
<<<<<<< HEAD
                latitude: -37.8161580666029,
                longitude: 144.961673719242
            }
=======
              latitude: -37.8161580666029,
              longitude: 144.961673719242"
>>>>>>> 5ca6568a019f1f5b34912846015cd417446aa59a
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
            ['', '3', '', '9', '', '4', '', '8', ''],
            ['', '', '', '6', '', '7', '', '', ''],
            ['6', '5', '', '', '1', '', '', '3', '4'],
            ['', '6', '7', '', '', '', '1', '2', ''],
            ['5', '', '', '', '', '', '', '', '9'],
            ['', '2', '3', '', '', '', '8', '6', ''],
            ['2', '4', '', '', '7', '', '', '1', '6'],
            ['', '', '', '1', '', '6', '', '', ''],
            ['', '9', '', '4', '', '8', '', '5', ''],
        ],
        timeTaken: 0
    }
    if (dbSudoku.find().count() == 0) {
        dbSudoku.insert(sudoku);
    }

});
