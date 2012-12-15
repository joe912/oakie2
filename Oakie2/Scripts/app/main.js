﻿(function () {
    var root = this;

    define3rdPartyModules();
    loadPluginsAndBoot();

    function define3rdPartyModules() {

        // These are already loaded via bundles. 
        // We define them and put them in the root object.
        define('jquery', [], function () { return root.jQuery; });
        define('ko', [], function () { return root.ko; });

        alert('define amplify');
        define('amplify', [], function () { return root.amplify; });
        alert('defined amplify');
        /*        define('infuser', [], function () { return root.infuser; });
        define('moment', [], function () { return root.moment; });
*/
        define('sammy', [], function () { return root.Sammy; });
        define('toastr', [], function () { return root.toastr; });
/*
        define('underscore', [], function () { return root._; });
*/

    }

    function loadPluginsAndBoot() {
        // Plugins must be loaded after jQuery and Knockout, 
        // since they depend on them.
/*
        requirejs([
                'ko.bindingHandlers',
                'ko.debug.helpers'
        ], boot);
*/
        requirejs([], boot); // just boot it
    }

    function boot() {
        require(['bootstrapper'], function (bs) { bs.run(); });
    }
})();