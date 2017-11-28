(function() {
    'use strict';

    angular
        .module('webApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService', '$ocLazyLoad'];

    function NavbarController ($state, Auth, Principal, ProfileService, LoginService, $ocLazyLoad) {
        var vm = this;

        // Document ready
        angular.element(document).ready(function () {
        		//BEGIN JQUERY NEWS UPDATE
            $('#news-update').ticker({
                controls: false,
                titleText: ''
            });
            //END JQUERY NEWS UPDATE
            
            //BEGIN TOPBAR DROPDOWN
            $('.dropdown-slimscroll').slimScroll({
                "height": '250px',
                "wheelStep": 5
            });
            //END TOPBAR DROPDOWN
        });
        
        // Init controller
	    	(function initController() {
	    		$ocLazyLoad.load([
	    			'vendors/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js'
	        		, 'content/js/jquery.menu.js'
	    		]);
	    })();
	    	
        vm.isNavbarCollapsed = true;
        vm.isAuthenticated = Principal.isAuthenticated;

        ProfileService.getProfileInfo().then(function(response) {
            vm.inProduction = response.inProduction;
            vm.swaggerEnabled = response.swaggerEnabled;
        });

        vm.login = login;
        vm.logout = logout;
        vm.toggleNavbar = toggleNavbar;
        vm.collapseNavbar = collapseNavbar;
        vm.$state = $state;

        function login() {
            collapseNavbar();
            LoginService.open();
        }

        function logout() {
            collapseNavbar();
            Auth.logout();
            $state.go('home');
        }

        function toggleNavbar() {
            vm.isNavbarCollapsed = !vm.isNavbarCollapsed;
        }

        function collapseNavbar() {
            vm.isNavbarCollapsed = true;
        }
    }
})();
