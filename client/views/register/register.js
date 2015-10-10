Template.register.events({

    /**
     * Submit the register form. Attempt to register. If it fails, change the button color to red (to indicate an error)
     * @param e
     */
    'submit #register-form': function(e) {
        e.preventDefault();

        // read values from form
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var name = firstname + " " + lastname;


        // show loading animation
        $('.fa-spinner').show();

        // Register account
        Accounts.createUser({
            username: username,
            email: email,
            password: password,
            profile: {
                name: name,
                accessLevel: 1
            }
        });
        Router.go('/');
    },


    /**
     * If the user provides username / password, make sure that any previous error markers are removed.
     * @param e
     */
    'keyup input': function(e) {
        $('#register-button').removeClass('btn-danger').addClass('btn-primary');
    }
});
