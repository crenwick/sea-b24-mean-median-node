'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('mmmCtrl', function() {
  var $controllerConstructor;
  var $httpBackend;
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
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('make a call to mmm API', function() {
      $httpBackend.expectPOST('/api/calc')
        .respond(200, {'mean': 2.25, 'median': 2.5, 'mode':'3'});
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.user = {'input': '1 2 3 3'};
      $scope.update();
      $httpBackend.flush();

      expect($scope.output).toBeDefined();
      expect($scope.output.median).toBe(2.5);
    });
  });
});
