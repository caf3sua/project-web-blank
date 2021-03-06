/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
(function() {
    'use strict';
    angular
      .module('app', [
          // Core module
          'tmh.dynamicLocale',
          'pascalprecht.translate',
          'ngCookies',
          'ngAria',
          'ngCacheBuster',
//          'ui.bootstrap',
//          'ui.bootstrap.datetimepicker',
          'infinite-scroll',
          'angular-loading-bar',
          // Theme
		 'ngAnimate',
		 'ngResource',
		 'ngSanitize',
		 'ngTouch',
		 'ngStorage',
		 'ngStore',
		 'ui.router',
		 'ui.utils',
		 'ui.load',
		 'ui.jp',
		 'oc.lazyLoad'
      ])
      .run(run);
    
    run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }
    
//    run.$inject = ['translationHandler'];
//
//    function run(translationHandler) {
//        translationHandler.initialize();
//    }
})();
