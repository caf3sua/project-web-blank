(function() {
    'use strict';

    angular
        .module('webApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('home', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('home');
                    return $translate.refresh();
                }],
                loadPlugin: function ($ocLazyLoad) {
                		console.log('$ocLazyLoad for home page');
	            		return $ocLazyLoad.load([
	            			'vendors/intro.js/intro.js'
	            			, 'vendors/flot-chart/jquery.flot.js'
	            			, 'vendors/flot-chart/jquery.flot.categories.js'
	            			, 'vendors/flot-chart/jquery.flot.pie.js'
	            			, 'vendors/flot-chart/jquery.flot.tooltip.js'
	            			, 'vendors/flot-chart/jquery.flot.resize.js'
	            			, 'vendors/flot-chart/jquery.flot.fillbetween.js'
	            			, 'vendors/flot-chart/jquery.flot.stack.js'
	            			, 'vendors/flot-chart/jquery.flot.spline.js'
	            			, 'vendors/calendar/zabuto_calendar.min.js'
	            		]);
	            }
            }
        });
    }
})();
