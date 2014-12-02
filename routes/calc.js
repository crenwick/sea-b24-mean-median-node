'use strict';

var mmm = require('../lib/mean_median_mode');

module.exports = function(app) {
  app.post('/api/calc', function(req, res) {
    var calc = function(input, callback) {
      var output = {};
      output.mean = mmm.mean(input);
      output.median = mmm.median(input);
      output.mode = mmm.mode(input);
      callback(output);
    };
    calc(req.body.input, function(data) {
      res.json(data);
    });
  });
};
