// lazyload config

angular.module('webApp')
  .constant('MODULE_CONFIG', [
      {
          name: 'ngFileUpload',
          module: true,
          files: [
              'bower_components/ng-file-upload/ng-file-upload.js'
          ]
      },
      {
          name: 'app-state',
          module: false,
          files: [
        	  	  'app/admin/admin.state.js',
              'app/admin/user-management/user-management.state.js',
              'app/admin/metrics/metrics.state.js',
              'app/admin/logs/logs.state.js',
              'app/admin/docs/docs.state.js',
              'app/admin/audits/audits.state.js',
              'app/admin/health/health.state.js',
              'app/admin/configuration/configuration.state.js',
              'app/account/account.state.js',
              'app/account/settings/settings.state.js',
              'app/account/register/register.state.js',
              'app/account/password/password.state.js',
              'app/account/activate/activate.state.js',
              'app/account/reset/request/reset.request.state.js',
              'app/account/reset/finish/reset.finish.state.js',
              'app/entities/entity.state.js'
          ]
      }
    ]
  )
  .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
      $ocLazyLoadProvider.config({
          debug: false,
          events: false,
          modules: MODULE_CONFIG
      });
  }])
  .run(run);

run.$inject = ['$ocLazyLoad'];

function run($ocLazyLoad) {
	console.log('run $ocLazyLoad');
	// TODO: load extra libs
}
