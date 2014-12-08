'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', 'MMM', function($scope, MMM) {
    var mmmCalc = new MMM();
    $scope.user = {};
    $scope.output = {};

    $scope.update = function() {
      var input = $scope.user.input.split(' ');
      for (var i = 0; i < input.length; i++) {
        input[i] = +input[i];
      }
      $scope.output.mean = mmmCalc.mean(input);
      $scope.output.median = mmmCalc.median(input);
      $scope.output.mode = mmmCalc.mode(input);
    };
  }]);
};
