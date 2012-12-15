define('oakie.Router',
    ['jquery', 'sammy', 'toastr' ],
    function ($,  Sammy,  toastr ) {

        var vm = null,
            currentHash = '',
            isRedirecting = false,
            sammy = new Sammy.Application(function () {
                this.get('#:view', function () {

                    vm.chosenViewId(this.params.view);

                    // hide all views
                    $('.view').hide();

                    // show chosen view
                    if (this.params.view === 'Team') {
                        $('.teamView').fadeIn();
                    } else if (this.params.view === 'Manage') {
                        $('.manageView').fadeIn();
                    } else if (this.params.view === 'Leaderboard') {
                        $('.leaderboardView').fadeIn();
                    }

                });
                this.get('', function () {
                    this.app.runRoute('get', '#Team');
                }); // default view is Team
            }),

        registerBeforeLeaving = function () {
            sammy.before(/.*/, function () {
                var
                    context = this,
                    response = vm.canLeave();

                if (!isRedirecting && !response) {
                    isRedirecting = true;
                    toastr.warning('Please save or cancel your changes before continuing.');
                    // Keep hash url the same in address bar
                    context.app.setLocation(currentHash);
                }
                else {
                    isRedirecting = false;
                    currentHash = context.app.getLocation();
                }
                // Cancel the route if this returns false
                return response; //response.val;
            });
        },

        run = function (viewmodel) {
            vm = viewmodel;
            sammy.run();
            registerBeforeLeaving();
        };

    return {
        run: run
    };
});