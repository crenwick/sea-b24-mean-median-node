'use strict';

require('angular/angular');
require('angular-route');
var mmmApp = angular.module('mmmApp', ['ngRoute']);

//services
require('./services/mmm_service')(mmmApp);

//controlers
require('./calc/controllers/calc_controller')(mmmApp);

mmmApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/calc', {
    templateUrl: 'templates/mmm/mmm_template.html',
    controller: 'mmmCtrl'
  })
  .otherwise({
    redirectTo: '/calc'
  });
}]);
