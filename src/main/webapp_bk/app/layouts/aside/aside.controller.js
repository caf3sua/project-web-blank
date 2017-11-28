(function() {
    'use strict';

    angular
        .module('webApp')
        .controller('AsideController', AsideController);

    AsideController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService'];

    function AsideController ($state, Auth, Principal, ProfileService, LoginService) {
    		var vm = this;

        // Document ready
        angular.element(document).ready(function () {

        });
        
        // Init controller
	    	(function initController() {
	    
	    	})();
    }
})();
