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
                authorities: [],
                title: 'Dashboard'
            },
            views: {
                'content@': {
                    templateUrl: 'app/home/home.html',
                    controller: 'ChartCtrl',
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
	            			'scripts/controllers/chart.js'
	            		]);
	            }
            }
        });
    }
})();


//(function() {
//    'use strict';
//
//    angular
//        .module('webApp')
//        .config(stateConfig);
//
//    stateConfig.$inject = ['$stateProvider'];
//
////    url: '/dashboard',
////    templateUrl: dashboard,
////    data : { title: 'Dashboard' },
////    controller: "ChartCtrl",
////    resolve: load(['scripts/controllers/chart.js'])
//    
//    function stateConfig($stateProvider) {
//        $stateProvider.state('home', {
//            parent: 'app',
//            url: '/',
//            data: {
//                authorities: [],
//                title: 'Dashboard'
//            },
//            views: {
//                'content@': {
////                    templateUrl: 'app/home/home.html',
////                    controller: 'HomeController',
////                    controllerAs: 'vm'
//                		templateUrl: dashboard,
//                		controller: "ChartCtrl",
//                }
//            },
//            resolve: {
//                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
//                    $translatePartialLoader.addPart('home');
//                    return $translate.refresh();
//                }],
//                loadPlugin: load(['scripts/controllers/chart.js'])
//            }
//        });
//    }
//})();
