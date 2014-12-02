'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);
require('../../server.js');

describe('test the MMM api', function() {
  it('should get mmm when posting an input', function(done) {
    chai.request('http://localhost:3000')
    .post('/api/calc')
    .send({input: [3,4,5,6,6,6,6,4,400]})
    .end(function(err, res) {
      expect(err).to.be.null;
      expect(res.body.mean).to.eql(48.888888888888886);
      expect(res.body.median).to.eql(6);
      expect(res.body.mode).to.eql(6);
      done();
    });
  });
});
