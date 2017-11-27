(function() {
    'use strict';

    angular
        .module('webApp')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService'];

    function SidebarController ($state, Auth, Principal, ProfileService, LoginService) {
    		var vm = this;

        // Document ready
        angular.element(document).ready(function () {
        		//BEGIN MENU SIDEBAR
            $('#sidebar').css('min-height', '100%');
            $('#side-menu').metisMenu();

            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse');
                } else {
                    $('div.sidebar-collapse').removeClass('collapse');
                    $('div.sidebar-collapse').css('height', 'auto');
                }
                if($('body').hasClass('sidebar-icons')){
                    $('#menu-toggle').hide();
                } else{
                    $('#menu-toggle').show();
                }
            });
            //END MENU SIDEBAR
        });
        
        // Init controller
	    	(function initController() {
	    })();
    }
})();
