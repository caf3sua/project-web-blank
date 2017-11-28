(function() {
    'use strict';

    angular
        .module('webApp', [
            'ngStorage',
            'tmh.dynamicLocale',
            'pascalprecht.translate',
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            'angular-loading-bar',
            'oc.lazyLoad',
            // Themes
            'ngAnimate',
            'ngSanitize',
            'ngTouch',
            'ngStore',
            'ui.utils',
            'ui.load',
            'ui.jp'
        ])
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }
})();
