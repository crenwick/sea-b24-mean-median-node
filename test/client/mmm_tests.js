'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('mmmCtrl', function() {
  var $controllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof mmmController).toBe('object');
  });

  describe('rest request', function() {

    it('should get MMM', function() {
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.user = {input: '1 2 3 3'};
      $scope.update();

      expect($scope.output).toBeDefined();
      expect($scope.output.median).toBe(2.5);
    });
  });
});
