(function() {
    'use strict';

    angular
        .module('webApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', '$ocLazyLoad'];

    function HomeController ($scope, Principal, LoginService, $state, $ocLazyLoad) {
        var vm = this;

        // Document ready
        angular.element(document).ready(function () {
	        	$ocLazyLoad.load([
	    			'content/js/index.js'
	    		]);
        });
        
        // Init controller
	    	(function initController() {
	    		$('.chat-scroller').slimScroll({
	    	        "width": '100%',
	    	        "height": '270px',
	    	        "wheelStep": 5,
	    	        "scrollTo": "100px"
	    	    });
	    })();
    }
})();
