/*jshint node: true*/
'use strict';
var MeanMedianMode = function() {
  var obj = {};

  this.mean = function() {
    var nums = conv(arguments);
    var l = nums.length;
    var sum = 0;
    for (var i = 0; i < l; i++) {
      sum += nums[i];
    }
    obj.mean = (sum / l);
    return obj.mean;
  };

  this.median = function() {
    var nums = conv(arguments);
    var l = nums.length;
    var h = l / 2;

    if (l % 2 == 1) {
      obj.median = nums[Math.round(h) - 1];
    } else {
      obj.median = ((nums[h - 1] + nums[h]) / 2);
    }
    return obj.median;
  };

  this.mode = function() {
    var nums = conv(arguments);
    var l = nums.length;
    var h = l / 2;
    var modeNums = [];
    var findMode = {};
    var max = 0;

    if (l % 2 == 1) {
      obj.median = nums[Math.round(h) - 1];
    } else {
      obj.median = ((nums[h - 1] + nums[h]) / 2);
    }

    var sorted = nums.sort(function(a, b) {
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
    obj.mode = modeNums[0];
    console.log(obj);
    return parseInt(obj.mode);
  };
};

function findNums() {
  var n = [];
  for (var i = 2; i < process.argv.length; i++) {
    n.push(parseInt(process.argv[i]));
  }
  return n;
}

function conv(args) {
  var nums = [];
  var al = args.length;
  if (al > 1) {
    for (var i = 0; i < al; i++) {
      nums = nums.concat(args[i]);
    }
  } else {
    nums = args[0];
  }
  return nums;
}

var mmm = new MeanMedianMode();
module.exports = mmm;

mmm.mean(findNums());
mmm.median(findNums());
mmm.mode(findNums());
