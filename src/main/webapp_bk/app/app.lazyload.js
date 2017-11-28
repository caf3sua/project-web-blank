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
      },
      {
          name: 'mgcrea.ngStrap',
          module: true,
          serie: true,
          files: [
              'content/assets/angular-motion/dist/angular-motion.min.css',
              'content/assets/bootstrap-additions/dist/bootstrap-additions.min.css',
              'libs/angular/angular-strap/dist/angular-strap.js',
              'libs/angular/angular-strap/dist/angular-strap.tpl.js'
          ]
      },
      {
          name: 'ui.bootstrap',
          module: true,
          serie: true,
          files: [
              'libs/angular/angular-bootstrap/ui-bootstrap-tpls.min.js',
              'libs/angular/angular-bootstrap/ui-bootstrap-tpls.js'
          ]
      },
      {
          name: 'ui.select',
          module: true,
          files: [
              'libs/angular/angular-ui-select/dist/select.min.js',
              'libs/angular/angular-ui-select/dist/select.min.css'
          ]
      },
      {
          name: 'vr.directives.slider',
          module: true,
          files: [
              'libs/angular/venturocket-angular-slider/build/angular-slider.min.js',
              'libs/angular/venturocket-angular-slider/angular-slider.css'
          ]
      },
      {
          name: 'angularBootstrapNavTree',
          module: true,
          files: [
              'libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
              'libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css'
          ]
      },
      {
          name: 'angularFileUpload',
          module: true,
          files: [
              'libs/angular/angular-file-upload/angular-file-upload.js'
          ]
      },
      {
          name: 'ngImgCrop',
          module: true,
          files: [
              'libs/angular/ngImgCrop/compile/minified/ng-img-crop.js',
              'libs/angular/ngImgCrop/compile/minified/ng-img-crop.css'
          ]
      },
      {
          name: 'smart-table',
          module: true,
          files: [
              'libs/angular/angular-smart-table/dist/smart-table.min.js'
          ]
      },
      {
          name: 'ui.map',
          module: true,
          files: [
              'libs/angular/angular-ui-map/ui-map.js'
          ]
      },
      {
          name: 'ui.grid',
          module: true,
          files: [
              'libs/angular/angular-ui-grid/ui-grid.min.js',
              'libs/angular/angular-ui-grid/ui-grid.min.css',
              'libs/angular/angular-ui-grid/ui-grid.bootstrap.css'
          ]
      },
      {
          name: 'xeditable',
          module: true,
          files: [
              'libs/angular/angular-xeditable/dist/js/xeditable.min.js',
              'libs/angular/angular-xeditable/dist/css/xeditable.css'
          ]
      },
      {
          name: 'smart-table',
          module: true,
          files: [
              'libs/angular/angular-smart-table/dist/smart-table.min.js'
          ]
      },
      {
          name:'ui.calendar',
          module: true,
          files: ['libs/angular/angular-ui-calendar/src/calendar.js']
      },
      {
          name:'summernote',
          module: true,
          files: [
            'libs/jquery/summernote/dist/summernote.css',
            'libs/jquery/summernote/dist/summernote.js',
            'libs/angular/angular-summernote/dist/angular-summernote.js'
          ]
      },
      {
          name: 'dataTable',
          module: false,
          files: [
              'libs/jquery/datatables/media/js/jquery.dataTables.min.js',
              'libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
              'libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'
          ]
      },
      {
          name: 'footable',
          module: false,
          files: [
              'libs/jquery/footable/dist/footable.all.min.js',
              'libs/jquery/footable/css/footable.core.css'
          ]
      },
      {
          name: 'easyPieChart',
          module: false,
          files: [
              'libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'
          ]
      },
      {
          name: 'sparkline',
          module: false,
          files: [
              'libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'
          ]
      },
      {
          name: 'plot',
          module: false,
          files: [
              'libs/jquery/flot/jquery.flot.js',
              'libs/jquery/flot/jquery.flot.resize.js',
              'libs/jquery/flot/jquery.flot.pie.js',
              'libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
              'libs/jquery/flot-spline/js/jquery.flot.spline.min.js',
              'libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js'
          ]
      },
      {
          name: 'vectorMap',
          module: false,
          files: [
              'libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
              'libs/jquery/bower-jvectormap/jquery-jvectormap.css', 
              'libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
              'libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js'
          ]
      },
      {
          name: 'moment',
          module: false,
          files: [
              'libs/js/moment/moment.js'
          ]
      },
      {
          name: 'fullcalendar',
          module: false,
          files: [
              'libs/jquery/moment/moment.js',
              'libs/jquery/fullcalendar/dist/fullcalendar.min.js',
              'libs/jquery/fullcalendar/dist/fullcalendar.css',
              'libs/jquery/fullcalendar/dist/fullcalendar.theme.css'
          ]
      },
      {
          name: 'sortable',
          module: false,
          files: [
              'libs/jquery/html.sortable/dist/html.sortable.min.js'
          ]
      },
      {
          name: 'nestable',
          module: false,
          files: [
              'libs/jquery/nestable/jquery.nestable.css',
              'libs/jquery/nestable/jquery.nestable.js'
          ]
      },
      {
          name: 'chart',
          module: false,
          files: [
              'libs/js/echarts/build/dist/echarts-all.js',
              'libs/js/echarts/build/dist/theme.js',
              'libs/js/echarts/build/dist/jquery.echarts.js'
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
