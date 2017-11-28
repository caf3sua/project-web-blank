(function() {
    'use strict';

    angular
        .module('webApp')
        .controller('BreadcrumbController', BreadcrumbController);

    BreadcrumbController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService', '$ocLazyLoad'];

    function BreadcrumbController ($state, Auth, Principal, ProfileService, LoginService, $ocLazyLoad) {
    		var vm = this;

        // Document ready
        angular.element(document).ready(function () {
        });
        
        // Init controller
	    	(function initController() {
	    })();
    }
})();
