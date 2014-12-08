'use strict';

module.exports = function(app) {
  app.factory('MMM', [function() {
    return function() {
      return {
        mean: function(input) {
          var l = input.length;
          var sum = 0;
          for (var i = 0; i < l; i++) {
            sum += input[i];
          }
          return (sum / l);
        },
        median: function(input) {
          var l = input.length;
          var h = l / 2;
          if (l % 2 == 1) {
            return input[Math.round(h) - 1];
          } else {
            return ((input[h - 1] + input[h]) / 2);
          }
        },

        mode: function(input) {
          var l = input.length;
          var modeNums = [];
          var findMode = {};
          var max = 0;

          var sorted = input.sort(function(a, b) {
            return a - b;
          });
          for (var i = 0; i < l; i++) {
            if (!findMode.hasOwnProperty(sorted[i])) {
              findMode[sorted[i]] = 1;
            } else {
              findMode[sorted[i]]++;
            }
          }

          var props = (Object.keys(findMode));

          for (i = 0; i < props.length; i++) {
            var numTimes = findMode[props[i]];
            if (numTimes > max) {
              max = numTimes;
              modeNums = [props[i]];
            } else if (numTimes == max) {
              modeNums.push(props[i]);
            }
          }
          return parseInt(modeNums[0]);
        }
      };
    };
  }]);
};
