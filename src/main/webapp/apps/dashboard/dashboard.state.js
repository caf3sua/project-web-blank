(function() {
    'use strict';

    angular
        .module('app')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'MODULE_CONFIG'];

    function stateConfig($stateProvider, $urlRouterProvider,   MODULE_CONFIG) {
        $stateProvider.state('app.dashboard', {
            parent: 'app',
            url: '/dashboard',
            templateUrl: 'apps/dashboard/dashboard.html',
            data : { title: 'Dashboard' },
            controller: "DashboardController",
            controllerAs: 'vm',
            resolve: {
            		loadPlugin: function ($ocLazyLoad) {
	            		return $ocLazyLoad.load(['apps/dashboard/dashboard.controller.js']);
		        }
            }
//            url: '/dashboard',
//            data: {
//                authorities: [],
//                title: 'Dashboard'
//            },
//            views: {
//                'content@': {
//                    templateUrl: 'app/home/home.html',
//                    controller: 'ChartCtrl',
//                    controllerAs: 'vm'
//                }
//            },
//            resolve: {
//                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
//                    $translatePartialLoader.addPart('home');
//                    return $translate.refresh();
//                }],
//                loadPlugin: function ($ocLazyLoad) {
//                		console.log('$ocLazyLoad for home page');
//	            		return $ocLazyLoad.load([
//	            			'scripts/controllers/chart.js'
//	            		]);
//	            }
//            }
        });
    }
})();
