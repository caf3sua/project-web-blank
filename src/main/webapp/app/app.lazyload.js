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
      },
      {
          name: 'components-util',
          module: false,
          files: [
        	      'app/components/util/truncate-words.filter.js',
        	      'app/components/util/truncate-characters.filter.js',
        	      'app/components/util/sort-by.directive.js',
        	      'app/components/util/sort.directive.js',
        	      'app/components/util/parse-links.service.js',
        	      'app/components/util/pagination-util.service.js',
        	      'app/components/util/jhi-item-count.directive.js',
        	      'app/components/util/error.constants.js',
        	      'app/components/util/date-util.service.js',
        	      'app/components/util/data-util.service.js',
        	      'app/components/util/capitalize.filter.js',
        	      'app/components/util/base64.service.js',
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
	console.log('run init $ocLazyLoad');
	$ocLazyLoad.load(['components-util']);
	// TODO: load extra libs
}
