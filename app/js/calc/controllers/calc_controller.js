/* jshint ignore:start */
'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.sendInput = function() {
      var input = $scope.newInput.split(' ');
      for (var i = 0; i < input.length; i++) {
        input[i] = +input[i];
      }
      $http({
        method: 'POST',
        url: '/api/calc',
        data: {input: input}
      })
      .success(function(data) {
        console.log(data);
        $scope.output = data;
      })
      .error(function(data) {
        console.log(data);
      });
    };
  }]);
};
/* jshint ignore:end */
