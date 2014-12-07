'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.user = {};

    $scope.update = function() {
      console.log('update running!');
      var input = $scope.user.input.split(' ');
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
