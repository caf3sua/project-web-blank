(function() {
    'use strict';

    angular
        .module('webApp')
        .run(runBlock)
        .config(stateConfig);

    runBlock.$inject = ['$rootScope', '$state', '$stateParams'];
    function runBlock($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;        
    }
    
    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'MODULE_CONFIG'];

    function stateConfig($stateProvider,   $urlRouterProvider,   MODULE_CONFIG ) {
	    	var p = getParams('layout'),
	        l = p ? p + '.' : '',
	        layout = '../views/layout/layout.'+l+'html',
	        dashboard = '../views/dashboard/dashboard.'+l+'html';
	
	    $urlRouterProvider
	      .otherwise('/');
	    
        $stateProvider.state('app', {
            abstract: true,
            views: {
                'navbar@': {
                    templateUrl: 'app/layouts/navbar/navbar.html',
                    controller: 'NavbarController',
                    controllerAs: 'vm'
                },
                'aside@': {
                    templateUrl: 'app/layouts/aside/aside.html',
                    controller: 'AsideController',
                    controllerAs: 'vm'
                },
                'breadcrumb@': {
                    templateUrl: 'app/layouts/breadcrumb/breadcrumb.html',
                    controller: 'BreadcrumbController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                authorize: ['Auth',
                    function (Auth) {
                        return Auth.authorize();
                    }
                ],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('global');
                }]
            }
        });
        
        function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                  function( $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                      promise = deferred.promise;
                    }
                    angular.forEach(srcs, function(src) {
                      promise = promise.then( function(){
                        angular.forEach(MODULE_CONFIG, function(module) {
                          if( module.name == src){
                            src = module.module ? module.name : module.files;
                          }
                        });
                        return $ocLazyLoad.load(src);
                      } );
                    });
                    deferred.resolve();
                    return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
          }

          function getParams(name) {
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                  results = regex.exec(location.search);
              return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
          }
          
    }
})();
