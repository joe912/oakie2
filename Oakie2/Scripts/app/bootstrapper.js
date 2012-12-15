// define the oakie namespace
//var oakie = oakie || {};

define('bootstrapper',
    ['jquery', 'ko', 'oakie.viewmodel', 'oakie.Router'],
    function ($, ko, oakievm, oakierouter) {
        var run = function () {

                // stick jq button binding here??    

                ko.applyBindings(oakievm);

                oakierouter.run(oakievm);
            };

        return {
            run: run
        };
    });